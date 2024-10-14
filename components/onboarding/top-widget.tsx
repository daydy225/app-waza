import images from "@/constants/images";
import React from "react";
import { Image, View } from "react-native";

const TopWidget = () => {
  return (
    <View className="w-full bg-light-gray  flex-1 items-center justify-center">
      <Image
        source={images.onboarding1}
        className="max-w-[380px] w-full h-[298px]"
        resizeMode="contain"
      />
    </View>
  );
};

export default TopWidget;
