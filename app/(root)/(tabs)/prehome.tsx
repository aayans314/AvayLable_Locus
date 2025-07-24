import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import noResult from "@/assets/images/no-result.png"; // adjust path if needed
import campus from "@/assets/images/campus.png"; // campus image import

const PreHome = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleComingSoon = (service: string) => {
    setMessage(`${service} service is coming soon.`);
    setShowImage(true);

    // Clear after 2.5 seconds
    setTimeout(() => {
      setMessage("");
      setShowImage(false);
    }, 2500);
  };

  return (
    <View className="flex-1 bg-gray-100 items-center justify-center px-6">
      {/* Campus Image */}
      <Image
        source={campus}
        className="w-64 h-40 mb-6 rounded-xl"
        resizeMode="cover"
      />
      
      <Text className="text-3xl font-bold text-gray-800 mb-2">AvayLable @ Colby</Text>
      <Text className="text-lg text-gray-500 mb-8">Looking for a service?</Text>

      <View className="w-full">
        <TouchableOpacity
          className="bg-white py-4 px-6 rounded-xl shadow items-center mb-6"
          onPress={() => handleComingSoon("💇 Haircut")}
        >
          <Text className="text-xl text-gray-700 font-medium">💇 Get an Haircut</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white py-4 px-6 rounded-xl shadow items-center mb-6"
          onPress={() => router.push("/home")}
        >
          <Text className="text-xl text-gray-700 font-medium">🚗 Find Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white py-4 px-6 rounded-xl shadow items-center"
          onPress={() => handleComingSoon("📚 Tutor")}
        >
          <Text className="text-xl text-gray-700 font-medium">📚 AvayLable Tutors</Text>
        </TouchableOpacity>
      </View>

      {message && (
        <View className="items-center mt-8">
          {showImage && (
            <Image
              source={noResult}
              className="w-48 h-48 mb-4"
              resizeMode="contain"
            />
          )}
          <Text className="text-base text-gray-600">{message}</Text>
        </View>
      )}
    </View>
  );
};

export default PreHome;