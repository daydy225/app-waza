import React from "react";
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";

interface CodeInputWidgetProps {
  codeLength?: number;
  onCodeFilled: (code: string) => void;
}

const CodeInputWidget = ({
  codeLength = 6,
  onCodeFilled,
}: CodeInputWidgetProps) => {
  const [code, setCode] = React.useState(Array(codeLength).fill(""));
  const inputsRef = React.useRef<Array<TextInput | null>>([]);

  const handleInputChange = (value: string, index: number) => {
    if (/^\d$/.test(value)) {
      // Only accept single digit
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input
      if (index < codeLength - 1 && value) {
        inputsRef.current[index + 1]?.focus();
      }

      // Trigger callback when all digits are filled
      if (newCode.every((digit) => digit !== "")) {
        onCodeFilled(newCode.join(""));
      }
    }
  };

  const handleBackspace = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace") {
      if (code[index] === "" && index > 0) {
        inputsRef.current[index - 1]?.focus(); // Move focus to previous input
        const newCode = [...code];
        newCode[index - 1] = ""; // Clear the previous input
        setCode(newCode);
      } else {
        const newCode = [...code];
        newCode[index] = ""; // Clear the current input
        setCode(newCode);
      }
    }
  };

  return (
    <>
      <View className="mt-10">
        <Text className="text-xl font-psemibold text-center">
          Le code vérification
        </Text>
        <Text className="text-sm text-center text-[#A7A9B7] mt-2">
          Entrez le code de vérification envoyé à votre email
        </Text>
      </View>
      <View className="flex flex-row justify-between w-[80%] mt-[20px]">
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputsRef.current[index] = ref)}
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
            onKeyPress={(e) => handleBackspace(e, index)}
            keyboardType="numeric"
            maxLength={1}
            className="w-[60px] h-[60px] border-2 border-[#A7A9B7] text-center text-2xl rounded-lg mt-5"
            autoFocus={index === 0}
          />
        ))}
      </View>
    </>
  );
};

export default CodeInputWidget;
