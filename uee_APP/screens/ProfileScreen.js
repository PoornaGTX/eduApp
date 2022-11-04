import { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useAppContext } from "../context/appContext";
import { useIsFocused } from "@react-navigation/core";

//components
import ProfileForm from "../components/Form/ProfileForm";

const ProfileScreen = () => {
  const { user } = useAppContext();
  const isFocused = useIsFocused();
  const { updateUser } = useAppContext();

  //   useEffect(() => {
  //     if (isFocused) {
  //       getAllProjectDetails();
  //     }
  //   }, [isFocused]);

  if (user.length <= 0) {
    return (
      <View>
        <Text>no projects</Text>
      </View>
    );
  }

  const updateProfileHandler = (
    userMogoID,
    fname,
    lname,
    email,
    subject,
    grade
  ) => {
    updateUser(userMogoID, {
      firstName: fname,
      lastName: lname,
      email,
      teacherSubject: subject,
      grade,
    });
  };

  return (
    <View style={styles.container}>
      <ProfileForm
        labelName1="First Name"
        labelName2="Last Name"
        labelName3="Grade"
        labelName4="Subject"
        labelName5="Email"
        user={user}
        updateProfileHandler={updateProfileHandler}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#200364",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#a281f0",
    alignItems: "center",
  },
  imageStyle: {
    flex: 1,
  },
  liner: {
    flex: 1,
  },
  backImage: {
    opacity: 0.4,
  },
});
