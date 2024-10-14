import CodeInputWidget from "@/components/auth/code-input-widget";
import { BackButton, CustomButton } from "@/components/shared/button";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const VerificationScreen = () => {
  const [timer, setTimer] = React.useState("03:00");
  const [code, setCode] = React.useState("");

  const handleCodeFilled = (code: string) => {
    console.log(code);
    setCode(code);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        const [minutes, seconds] = prev.split(":").map(Number);
        if (minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return "00:00";
        }

        if (seconds === 0) {
          return `${minutes - 1}:59`;
        }

        if (seconds <= 10) {
          return `${minutes}:0${seconds - 1}`;
        }

        return `${minutes}:${seconds - 1}`;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView className="h-full bg-white relative">
      <ScrollView>
        <View className="w-full h-full flex-1 items-center pt-24 px-2 bg-white">
          <BackButton backButtonStyles="top-16" />
          <CodeInputWidget codeLength={4} onCodeFilled={handleCodeFilled} />
          <View className="mt-8">
            <Text className="text-center text-gray-500 text-sm">{timer}</Text>
          </View>
          <CustomButton
            title="Soumettre"
            handlePress={() => {
              if (code.length === 4 && code === "0000") {
                router.replace("/home");
              } else {
                alert("Veuillez entrer un code valide");
              }
            }}
            containerStyles="mt-8 w-[90%] rounded-2xl"
          />
        </View>
        <View className="w-full flex justify-center items-center mt-4">
          <Text className="text-dark-gray">
            Vous n'avez pas recu le code ?
            <Text className="text-base text-primary ml-2">
              {"  "}
              Renvoyer le code
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationScreen;
