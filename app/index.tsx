import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { View, ActivityIndicator } from "react-native";

const Home = () => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/prehome" />;
  }

  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
