import Map from "@/components/Map";
import { icons } from "@/constants";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const RideLayout = ({
  title,
  children,
  snapPoints,
}: {
  title: string;
  children: React.ReactNode;
  snapPoints: string[];
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [showSat, setShowSat] = useState(false);

  const toggleMapType = () => {
    setShowSat((prev) => !prev);
  };
  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen bg-blue-500">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Image
                  source={icons.backArrow}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              </View>
            </TouchableOpacity>
            <Text className="text-xl font-JakartaSemiBold ml-5">
              {title || "Go back"}
            </Text>
            <TouchableOpacity
              onPress={toggleMapType}
              className="bg-white shadow-md shadow-neutral-300 ml-5 px-3 py-1.5 rounded-full"
            >
              <Text className="text-xs font-JakartaBold text-black">
                {showSat ? "Normal view" : "Satellite view"}
              </Text>
            </TouchableOpacity>
          </View>
          <Map showSat={showSat} />
        </View>
        <BottomSheet
          keyboardBehavior="extend"
          ref={bottomSheetRef}
          snapPoints={snapPoints || ["40%", "85%"]}
          index={0}
        >
          <BottomSheetView style={{ flex: 1, padding: 20 }}>
            {children}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
