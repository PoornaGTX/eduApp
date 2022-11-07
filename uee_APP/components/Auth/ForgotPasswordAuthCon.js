import { useEffect } from "react";
import { Alert, StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/core";
import { useAppContext } from "../../context/appContext";

import FlatButton from "../icons/Button";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { Colors } from "../../constants/styles";

function ForgotPasswordAuthCon({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const { getAllUsers, users } = useAppContext();

  //navigation method to login or signUp
  function switchAuthModeHandler() {
    navigation.navigate("Login");
  }

  function submitHandler(credentials) {
    let { email, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;

    if (!emailIsValid || !passwordIsValid || !passwordsAreEqual) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      return;
    }

    //check if exisiting grade has subjects
    const checkExsisitigUser = users.some((user) => user.email === email);

    if (!checkExsisitigUser) {
      Alert.alert("Sorry", "there is no user registred in to the APP");
      return;
    }

    onAuthenticate({ email, password });
  }

  useEffect(() => {
    if (isFocused) {
      getAllUsers();
    }
  }, [isFocused]);

  return (
    <View style={styles.authContent}>
      <ScrollView>
        <ForgotPasswordForm isLogin={isLogin} onSubmit={submitHandler} />
        <View style={styles.buttons}>
          <FlatButton onPressProp={switchAuthModeHandler}>Log in</FlatButton>
        </View>
      </ScrollView>
    </View>
  );
}

export default ForgotPasswordAuthCon;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primartBlack,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});