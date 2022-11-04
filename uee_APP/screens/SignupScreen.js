import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { useAppContext } from "../context/appContext";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const { registerUser } = useAppContext();

  const signupHandler = async ({
    firstName,
    lastName,
    email,
    teacherSubject,
    Grade,
    type,
    password,
  }) => {
    setIsAuthenticating(true);
    try {
      registerUser({
        firstName,
        lastName,
        email,
        teacherSubject,
        Grade,
        type,
        password,
      });
    } catch (error) {
      Alert.alert(
        "Authntication failed!",
        "Could not log you in. Please check credentials or try again later"
      );
      setIsAuthenticating(false);
    }
  };

  // if (isAuthenticating) {
  //   return <LoadingOverlay message="Creating user..." />;
  // }

  return (
    <View>
      <ScrollView style={styles.form}>
        <AuthContent onAuthenticate={signupHandler} />
      </ScrollView>
    </View>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
    marginBottom: 20,
  },
});
