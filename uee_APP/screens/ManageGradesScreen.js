import { useLayoutEffect, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/icons/IconButton";
import Button from "../components/icons/Button";
import { KnowledgelabContext } from "../store/KLab-context";
import AdminForm from "../components/Form/AdminForm";

import { useAppContext } from "../context/appContext";
import { useIsFocused } from "@react-navigation/core";

const ManageGradesScreen = ({ route, navigation }) => {
  const GradeID = route.params?.GradeNumberID;
  const isEditing = !!GradeID;
  const isFocused = useIsFocused();

  const { grades, getAllGrades, alertText, showAlert } = useAppContext();

  const gardeDataForForm = grades.find((grade) => grade._id === GradeID);

  useEffect(() => {
    if (isFocused) {
      getAllGrades();
    }
  }, [isFocused]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Grade" : "Add Grade",
    });
  }, [navigation]);

  const deleteSubject = () => {
    SubjectCtx.deleteSubject(subjectID);
    navigation.goBack();
  };

  const cancleHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    SubjectCtx.addSubject();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AdminForm
        labelName1="Grade"
        labelName2={false}
        Grade={GradeID}
        onCancel={cancleHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValuesForEdit={gardeDataForForm}
        alertText={alertText}
        showAlert={showAlert}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color="green"
            size={36}
            // onPressProp={deleteSubjectHnadler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageGradesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#200364",
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#a281f0",
    alignItems: "center",
  },
});
