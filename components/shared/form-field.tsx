import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import { FormFieldProps } from "@/types";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputIcon = {
    Username: "person-outline",
    Email: "mail-outline",
    Password: "lock-closed-outline",
  }[title] as IconType;

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {/* <Text className="text-base text-gray-100 font-pmedium">{title}</Text> */}

      <View className="w-[90%] h-14 px-4 rounded-2xl border-2 border-dark-gray focus:border-primary flex flex-row items-center">
        <View>
          <Ionicons name={inputIcon} size={24} color="#A7A9B7" />
        </View>
        <TextInput
          className="flex-1 text-primary font-psemibold text-base pl-3"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#A7A9B7"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <View>
              <Ionicons
                name={!showPassword ? "eye" : "eye-off"}
                size={24}
                color="#A7A9B7"
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
