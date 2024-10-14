import React from "react";
import { ActivityIndicator, View } from "react-native";

const Loader = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator animating={true} color="#A7A9B7" size="large" />
    </View>
  );
};

export default Loader;
