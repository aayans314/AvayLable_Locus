import { Driver, MarkerData } from "@/types/type";

const directionsAPI = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

export const generateMarkersFromData = ({
  data,
  userLatitude,
  userLongitude,
}: {
  data: Driver[];
  userLatitude: number;
  userLongitude: number;
}): MarkerData[] => {
  return data.map((driver) => {
    const latOffset = (Math.random() - 0.5) * 0.01;
    const lngOffset = (Math.random() - 0.5) * 0.01;

    return {
      driver_id: driver.id, // ✅ ensure unique key
      latitude: userLatitude + latOffset,
      longitude: userLongitude + lngOffset,
      title: `${driver.first_name} ${driver.last_name}`,
      ...driver,
    };
  });
};

export const calculateRegion = ({
  userLatitude,
  userLongitude,
  destinationLatitude,
  destinationLongitude,
}: {
  userLatitude: number | null;
  userLongitude: number | null;
  destinationLatitude?: number | null;
  destinationLongitude?: number | null;
}) => {
  if (!userLatitude || !userLongitude) {
    return {
      latitude: 27.7103,
      longitude: 85.3222,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
  }

  if (!destinationLatitude || !destinationLongitude) {
    return {
      latitude: userLatitude,
      longitude: userLongitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
  }

  const minLat = Math.min(userLatitude, destinationLatitude);
  const maxLat = Math.max(userLatitude, destinationLatitude);
  const minLng = Math.min(userLongitude, destinationLongitude);
  const maxLng = Math.max(userLongitude, destinationLongitude);

  const latitudeDelta = (maxLat - minLat) * 1.3;
  const longitudeDelta = (maxLng - minLng) * 1.3;

  const latitude = (userLatitude + destinationLatitude) / 2;
  const longitude = (userLongitude + destinationLongitude) / 2;

  return {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
  };
};

export const calculateDriverTimes = async ({
  markers,
  userLatitude,
  userLongitude,
  destinationLatitude,
  destinationLongitude,
}: {
  markers: MarkerData[];
  userLatitude: number | null;
  userLongitude: number | null;
  destinationLatitude: number | null;
  destinationLongitude: number | null;
}) => {
  if (
    !userLatitude ||
    !userLongitude ||
    !destinationLatitude ||
    !destinationLongitude
  )
    return;

  try {
    const api = "https://maps.googleapis.com/maps/api/distancematrix/json";

    // 1. Get driver → user times in a single batch request
    const origins = markers
      .map((m) => `${m.latitude},${m.longitude}`)
      .join("|");

    const driverRes = await fetch(
      `${api}?origins=${origins}&destinations=${userLatitude},${userLongitude}&key=${directionsAPI}`
    );
    const driverData = await driverRes.json();

    // 2. Get user → destination time (shared for all)
    const userRes = await fetch(
      `${api}?origins=${userLatitude},${userLongitude}&destinations=${destinationLatitude},${destinationLongitude}&key=${directionsAPI}`
    );
    const userData = await userRes.json();

    const userElement = userData.rows?.[0]?.elements?.[0];
    const userToDestSec =
      userData.status === "OK" && userElement?.status === "OK"
        ? userElement.duration.value
        : null;

    // 3. Combine both travel times per driver
    return markers.map((marker, idx) => {
      const element = driverData.rows?.[idx]?.elements?.[0];

      if (
        driverData.status !== "OK" ||
        !element ||
        element.status !== "OK" ||
        userToDestSec === null
      ) {
        return {
          ...marker,
          time: null,
          price: null,
        };
      }

      const totalMin = (element.duration.value + userToDestSec) / 60;
      return {
        ...marker,
        time: totalMin,
        price: (totalMin * 0.5).toFixed(2),
      };
    });
  } catch (error) {
    console.error("Error calculating driver times:", error);
    return markers.map((marker) => ({
      ...marker,
      time: null,
      price: null,
    }));
  }
};
