import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SocialFormWidget = () => {
  return (
    <View className="w-[90%] h-[150px] flex-1 items-center justify-center mt-12 space-y-6">
      <Text className="text-[#A7A9B7] font-pmedium">Ou inscrivez-vous</Text>
      <TouchableOpacity className="rounded-xl min-h-[52px] flex flex-row justify-center border border-2 border-gray-600 items-center w-[90%] ">
        <Ionicons name="logo-google" size={24} color="#E5E5E5" />
        <Text className="text- font-pmedium ml-3">Continuer avec Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialFormWidget;
