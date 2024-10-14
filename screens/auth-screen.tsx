import { AuthTab } from "@/components/auth/auth-tab";
import InputWidget from "@/components/auth/input-widget";
import SocialFormWidget from "@/components/auth/social-form-widget";
import { BackButton } from "@/components/shared/button";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthScreen = () => {
  const [activeTab, setActiveTab] = React.useState<AuthTab["value"]>("login");

  return (
    <SafeAreaView className="h-full bg-white relative">
      <ScrollView>
        <View className="w-full h-full flex-1 items-center pt-24 px-2 bg-white">
          <BackButton />
          <AuthTab activeTab={activeTab} setActiveTab={setActiveTab} />
          <InputWidget activeTab={activeTab} />
          <SocialFormWidget />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;
