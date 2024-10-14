import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "@/utils/uri";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useUser() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();
  const [error, setError] = useState("");
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const subscription = async () => {
      const accessToken = await AsyncStorage.getItem("access_token");
      // const refreshToken = await AsyncStorage.getItem("refresh_token");

      if (!accessToken) {
        setLoading(false);
        return;
      }
      fetch(`${API_URI}/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then(async (res) => {
          console.log("🚀 ~ .then ~ res:", res);
          if (res.message) {
            alert(res.message);
            return;
          }

          setUser(res);
        })
        .catch((err) => {
          console.log(err);
          alert("Une erreur s'est produite, veuillez réessayer");
        })
        .finally(() => {
          setLoading(false);
        });

    };
    subscription();
  }, [refetch]);

  return { loading, user, error, setRefetch, refetch };
}