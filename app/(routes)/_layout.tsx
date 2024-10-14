import { Stack } from "expo-router";
import { StatusBar } from "react-native";

const Routeslayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="onboarding"
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack>

      {/* <Loader isLoading={loading} /> */}
      <StatusBar backgroundColor="#161622" />
    </>
  );
};

export default Routeslayout;
