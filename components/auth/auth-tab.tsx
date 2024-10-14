import { AuthTabProps } from "@/types";
import React from "react";
import { View } from "react-native";
import { CustomButton } from "../shared/button";

const tab = [
  {
    name: "S'inscrire",
    value: "register",
  },
  {
    name: "Se connecter",
    value: "login",
  },
];

export const AuthTab = ({ activeTab, setActiveTab }: AuthTabProps) => {
  return (
    <View className="rounded-full flex flex-row items-center justify-between bg-light-gray w-[90%] h-[50] mx-5 px-1">
      {tab.map((item) => (
        <CustomButton
          key={item.value}
          title={item.name}
          handlePress={() => {
            setActiveTab(item.value);
          }}
          containerStyles={`rounded-full w-1/2 min-h-[45px] ${
            activeTab === item.value ? " bg-white" : "bg-[transparent]"
          }
          `}
          textStyles={
            activeTab === item.value
              ? "text-primary text-sm"
              : "text-[#A7A9B7] text-sm font-pregular"
          }
        />
      ))}
    </View>
  );
};
