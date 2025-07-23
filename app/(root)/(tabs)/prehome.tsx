import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const PreHome = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 items-center justify-center px-6">
      <Text className="text-3xl font-bold text-gray-800 mb-2">AVAYLABLE</Text>
      <Text className="text-lg text-gray-500 mb-8">Choose a Service</Text>

      <View className="w-full">
        <TouchableOpacity className="bg-white py-4 px-6 rounded-xl shadow items-center mb-6">
          <Text className="text-xl text-gray-700 font-medium">💇 Haircut</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white py-4 px-6 rounded-xl shadow items-center mb-6"
          onPress={() => router.push("/home")} // ✅ preserves back nav
        >
          <Text className="text-xl text-gray-700 font-medium">🚗 Ride</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white py-4 px-6 rounded-xl shadow items-center">
          <Text className="text-xl text-gray-700 font-medium">📚 Tutor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreHome;
