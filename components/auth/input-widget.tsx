import { API_URI } from "@/utils/uri";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { CustomButton } from "../shared/button";
import FormField from "../shared/form-field";

const InputWidget = ({ activeTab }: { activeTab: string }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [form, setForm] = React.useState({
    username: "michaelw",
    email: "",
    password: "michaelwpass",
  });

  const handleSignUp = async () => {
    console.log("Sign Up", form);
  };

  const handleSignIn = () => {
    console.log("Sign Up", form);
    const { username, password } = form;
    if (!username || !password) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    if (password.length < 6) {
      alert("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }

    if (username.length < 3) {
      alert("Le nom d'utilisateur doit contenir au moins 3 caractères");
      return;
    }

    setIsSubmitting(true);

    fetch(`${API_URI}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 60,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then(async (res) => {
        console.log("🚀 ~ .then ~ res:", res);
        if (res.message) {
          alert(res.message);
          return;
        }

        await AsyncStorage.setItem("access_token", res.accessToken);
        await AsyncStorage.setItem("refresh_token", res.refreshToken);

        setForm({
          username: "",
          email: "",
          password: "",
        });

        router.push("/verify");
      })
      .catch((err) => {
        console.log(err);
        alert("Une erreur s'est produite, veuillez réessayer");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <View className="w-full items-center mt-10">
      <FormField
        title="Username"
        placeholder="Entrez votre nom"
        value={form.username}
        handleChangeText={(e) => setForm({ ...form, username: e })}
        otherStyles="mt-7"
        keyboardType="default"
      />

      {activeTab === "register" && (
        <FormField
          title="Email"
          placeholder="Entrez votre email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
      )}
      <FormField
        title="Password"
        placeholder="Entrez votre mot de passe"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e })}
        otherStyles="mt-7"
      />
      <CustomButton
        title={activeTab === "register" ? "Créer un compte" : "Se connecter"}
        handlePress={() =>
          activeTab === "register" ? handleSignUp() : handleSignIn()
        }
        containerStyles="mt-10 w-[90%] rounded-2xl"
        textStyles="text-white text-sm"
        isLoading={isSubmitting}
      />
    </View>
  );
};

export default InputWidget;
