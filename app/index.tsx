import Loader from "@/components/loader/loader";
import useUser from "@/hooks/auth/userUser";
import { Redirect } from "expo-router";
// import Loader from "@/components/loader/loader";

export default function TabsIndex() {
  const { loading, user } = useUser();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Redirect href={!user ? "/onboarding" : "/home"} />
      )}
    </>
  );
}
