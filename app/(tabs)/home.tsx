import useUser from "@/hooks/auth/userUser";
import { Redirect } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { user } = useUser();

  if (!user) {
    <Redirect href="/onboarding" />;
  }

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="flex-1 justify-center items-center ">
          <Text>{JSON.stringify(user, null, 2)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
