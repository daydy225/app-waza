import { CustomButtonProps, OnboardingButtonProps } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, router } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

export const OnboardingButton = ({
  title,
  containerStyles,
  link,
}: OnboardingButtonProps) => {
  return (
    <Link
      href={link}
      className={`bg-accent-green rounded-xl min-h-[62px] flex items-center justify-center ${containerStyles} text-white font-psemibold text-lg text-center pt-4`}
    >
      {title}
    </Link>
  );
};

export const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-accent-green rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-white font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

interface BackButtonProps {
  backButtonStyles?: string;
}

export const BackButton = ({ backButtonStyles }: BackButtonProps) => {
  return (
    <TouchableOpacity
      className={`flex items-center border border-primary rounded-full p-2 absolute top-5 left-6 ${backButtonStyles}`}
      onPress={() => router.back()}
    >
      <View>
        <Ionicons name={"arrow-back"} size={20} color="#000" />
      </View>
    </TouchableOpacity>
  );
};
