import { useState, useContext } from "react";
import { Alert, View, StyleSheet } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { useAppContext } from "../context/appContext";
// import { login } from "../util/auth";
// import LoadingOverlay from "../components/ui/LoadingOverlay";
// import { AuthContext } from "../store/auth-context";

function LoginScreen({ navigation }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { loginUser, showAlert, alertType } = useAppContext();

  const loginHandler = async ({ email, password }) => {
    //try catch is used to handle data base error
    setIsAuthenticating(true);
    try {
      loginUser({ email, password });
    } catch (error) {
      Alert.alert(
        "Authntication failed!",
        "Could not log you in. Please check credentials or try again later"
      );
      setIsAuthenticating(false);
    }
  };

  const alertHandler = () => {
    setIsAuthenticating(false);
    navigation.navigate("Login");
  };

  if (showAlert && alertType === "danger") {
    Alert.alert(
      "Authntication failed!",
      "Could not log you in. Please check credentials or try again later",
      [{ text: "Okay", onPress: alertHandler }]
    );
  }

  return (
    <View style={styles.form}>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
});
