import { useLayoutEffect, useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";

//components
// import IconButton from "../components/icons/IconButton";
// import { KnowledgelabContext } from "../store/KLab-context";
// import AdminForm from "../components/Form/AdminForm";

//http request
// import { createSubject, updateSubject, deleteSubjecthttp } from "../utill/http";
import { useAppContext } from "../context/appContext";
import { useIsFocused } from "@react-navigation/core";
import LoadingOverLay from "../components/LoadingOverLay/LoadingOverLay";
// import { user } from "../App";

const SelectedTeacherScreen = ({ route, navigation }) => {
  //   const subjectID = route.params?.subID; //this contain mongoose _id
  //   const Grade = route.params?.Grade; //this contain gradeID 'Grade 1'
  //   const isEditing = !!subjectID;
  const isFocused = useIsFocused();
  const { teacherID, name, grade, subId } = route.params;
  const { user, subscribeHandler, mySubscribeList, isLoading, alertText } =
    useAppContext();

  //grade id coming from adding new subject
  //   const addNewSubjectGradeValue = route.params?.gradeNameID; //this contain gradeID 'Grade 1'

  //   const subjectDataForForm = subjects
  //     .find
  //     // (subject) => subject._id === subjectID
  //     ();

  useEffect(() => {
    if (isFocused) {
      //   getAllSubjects();
      console.log(user.subscribeIds, subId);
    }
  }, [isFocused]);

  const isSubscribe = mySubscribeList.includes(teacherID);

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       title: isEditing ? "Edit Subject" : "Add Subject",
  //     });
  //   }, [navigation, isEditing]);

  //   const deleteSubjectHnadler = async () => {
  //     deleteSubject(subjectID);

  //     navigation.goBack();
  //   };

  //   const cancleHandler = () => {
  //     navigation.goBack();
  //   };

  //   const confirmHandler = async (SubName, GradeID, colorselect) => {
  //     const colorforEdit = !!colorselect;

  //     if (isEditing) {
  //       updateSubject(subjectID, {
  //         subjectName: SubName,
  //         color: colorforEdit && colorselect,
  //       });
  //     } else {
  //       addSubject({
  //         subjectName: SubName,
  //         gID: GradeID,
  //         color: colorselect,
  //       });
  //     }
  //     //navigation.goBack();
  //   };

  const subUnsubHandler = async () => {
    const subData = { subId: teacherID, isSubscribe: isSubscribe };
    console.log(subData);
    subscribeHandler(subData);
    return Alert.alert(
      alertText,
      isSubscribe ? "Unsubscribe the teacher." : "Subscribe the teacher."
    );
  };
  if (isLoading) {
    return <LoadingOverLay />;
  }
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{teacherID}</Text>
      <Text>{subId}</Text>
      <Text>{grade}</Text>

      <View style={styles.buttons}>
        <Button
          title={isSubscribe ? "unSub" : "Sub"}
          onPress={subUnsubHandler}
          style={styles.button}
        ></Button>
      </View>
    </View>
  );
};

export default SelectedTeacherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // backgroundColor: "#200364",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#a281f0",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
