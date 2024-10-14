import BottomWidget from "@/components/onboarding/bottom-widget";
import TopWidget from "@/components/onboarding/top-widget";
import React from "react";
import { View } from "react-native";

export const OnboardingWidget = () => {
  return (
    <View className="flex fex-col items-center justify-center bg-white h-full">
      <TopWidget />
      <BottomWidget />
    </View>
  );
};

export default OnboardingWidget;
