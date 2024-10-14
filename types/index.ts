import { Href } from "expo-router";
import React, { ReactNode } from "react";
import { ImageSourcePropType, TextInputProps } from "react-native";

// TabBarIcon
export interface TabBarIconProps {
  focused: boolean;
  color: string;
  name: string;
  children: ReactNode;
};

// CustomButton
export interface CustomButtonProps  {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  isActive?: boolean;
};
export interface OnboardingButtonProps  {
  title: string;
  containerStyles?: string;
 link:  Href<string | object>;
};


export interface AuthTabProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}


//FormField
export interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
}