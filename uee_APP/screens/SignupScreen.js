import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { useAppContext } from "../context/appContext";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "../constants/Images/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
    <ScrollView style={styles.form}>
      <AuthContent onAuthenticate={signupHandler} />
    </ScrollView>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    marginBottom: 40,
  },
  container: {
    backgroundColor: "red",
    // flex: 1,
  },
  backImage: {
    opacity: 0.6,
  },
  imageStyle: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
