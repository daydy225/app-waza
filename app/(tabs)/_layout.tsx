import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import { TabBarIconProps } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabIcon = ({ children, color, name, focused }: TabBarIconProps) => {
  return (
    <View className="flex items-center justify-center gap-2">
      {children}
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#004F40",
          tabBarInactiveTintColor: "#A7A9B7",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#F5f5f5",
            // borderTopWidth: 1,
            // borderTopColor: "#232533",
            height: 74,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Home" focused={focused}>
                <View>
                  <Ionicons
                    name={"home-sharp"}
                    size={24}
                    color={focused ? "#004F40" : "#A7A9B7"}
                  />
                </View>
              </TabIcon>
            ),
          }}
        />
        <Tabs.Screen
          name="message"
          options={{
            title: "Message",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Message" focused={focused}>
                <View>
                  <Ionicons
                    name={"chatbox-sharp"}
                    size={24}
                    color={focused ? "#004F40" : "#A7A9B7"}
                  />
                </View>
              </TabIcon>
            ),
          }}
        />

        {/* <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        /> */}
      </Tabs>
    </>
  );
};

export default TabsLayout;
