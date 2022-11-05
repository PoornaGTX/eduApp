import { useState, useContext } from "react";
import { Alert, View, StyleSheet } from "react-native";
import ForgotPasswordAuthCon from "../components/Auth/ForgotPasswordAuthCon";
import { useAppContext } from "../context/appContext";

function ForgotPasswordScreen({ navigation }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { passwordReset, showAlert, alertType } = useAppContext();

  const resetPasswordHandler = async ({ email, password }) => {
    //try catch is used to handle data base error
    setIsAuthenticating(true);
    try {
      passwordReset({ email, newPassword: password });
      Alert.alert("Reset success", "plese re-login with new credentials", [
        { text: "OK", onPress: () => navigation.navigate("Login") },
      ]);
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
      <ForgotPasswordAuthCon isLogin onAuthenticate={resetPasswordHandler} />
    </View>
  );
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
});
