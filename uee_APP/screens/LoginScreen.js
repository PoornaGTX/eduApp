import { useState, useContext } from "react";
import { Alert, View, StyleSheet } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { useAppContext } from "../context/appContext";

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
