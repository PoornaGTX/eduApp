import { useState, useContext } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
// import { createUser } from "../util/auth";
// import LoadingOverlay from "../components/ui/LoadingOverlay";
// import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  //   const authCtx = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);

    try {
      // const token = await createUser(email, password);
      // authCtx.authenticate(token);
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

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
