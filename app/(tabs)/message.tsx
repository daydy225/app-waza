import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Message = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="flex-1 justify-center items-center h-full">
          <Text>Message</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Message;
