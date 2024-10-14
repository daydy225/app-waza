import React from "react";
import { Text, View } from "react-native";
import { OnboardingButton } from "../shared/button";

const BottomWidget = () => {
  return (
    <View className="w-full bg-white h-[300px] mt-[20px]">
      <View className="w-full flex space-y-2">
        <Text className="text-primary font-psemibold text-2xl text-center">
          Bienvenue
        </Text>
        <Text className="text-primary font-plight text-sm text-center text-gray-400 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem
          esse maiores quisquam. Blanditiis, quaerat eum. Adipisci quae
          doloribus, voluptatum provident iure quia tempore eaque numquam
          beatae, dicta, assumenda rem?
        </Text>
        <OnboardingButton
          title="Commencer"
          link={"/auth"}
          containerStyles="mt-[22px] mx-4"
        />
      </View>
    </View>
  );
};

export default BottomWidget;
