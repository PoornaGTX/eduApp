import { useLayoutEffect, useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

//components
import IconButton from "../components/icons/IconButton";
import { KnowledgelabContext } from "../store/KLab-context";
import AdminForm from "../components/Form/AdminForm";

//http request
// import { createSubject, updateSubject, deleteSubjecthttp } from "../utill/http";
import { useAppContext } from "../context/appContext";
import { useIsFocused } from "@react-navigation/core";
import { user } from "../App";

const SelectedTeacherScreen = ({ route, navigation }) => {
  //   const subjectID = route.params?.subID; //this contain mongoose _id
  //   const Grade = route.params?.Grade; //this contain gradeID 'Grade 1'
  //   const isEditing = !!subjectID;
  const isFocused = useIsFocused();
  const { teacherID, name, grade, subId } = route.params;
  const {
    updateSubject,
    getAllSubjects,
    subjects,
    deleteSubject,
    addSubject,
    alertText,
    showAlert,
  } = useAppContext();

  //grade id coming from adding new subject
  //   const addNewSubjectGradeValue = route.params?.gradeNameID; //this contain gradeID 'Grade 1'

  //   const subjectDataForForm = subjects
  //     .find
  //     // (subject) => subject._id === subjectID
  //     ();

  useEffect(() => {
    if (isFocused) {
      //   getAllSubjects();
    }
  }, [isFocused]);

  const isSubscribe = user.subscribeIds.includes("1");

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

  const subscribeHandler = () => {
    if (isSubscribe) {
      console.log("");
    } else {
      console.log("");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{teacherID}</Text>
      <Text>{subId}</Text>
      <Text>{grade}</Text>

      <View style={styles.buttons}>
        <Button
          title={isSubscribe ? "unSub" : "Sub"}
          onPressProp={subscribeHandler}
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
    backgroundColor: "#200364",
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
