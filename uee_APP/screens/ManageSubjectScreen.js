import { useLayoutEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";

//components
import IconButton from "../components/icons/IconButton";
import { KnowledgelabContext } from "../store/KLab-context";
import AdminForm from "../components/Form/AdminForm";

//http request
import { createSubject } from "../utill/http";

const ManageSubjectScreen = ({ route, navigation }) => {
  const subjectID = route.params?.subID;
  const Grade = route.params?.Grade;
  const isEditing = !!subjectID;

  //grade id coming from adding new subject
  const addNewSubjectGradeValue = route.params?.gradeNameID;

  const SubjectCtx = useContext(KnowledgelabContext);

  const subjectDataForForm = SubjectCtx.subjects.find(
    (subject) => subject.id === subjectID
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Subject" : "Add Subject",
    });
  }, [navigation, isEditing]);

  const deleteSubject = () => {
    SubjectCtx.deleteSubject(subjectID);
    navigation.goBack();
  };

  const cancleHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (SubName, GradeID, colorselect) => {
    const colorforEdit = !!colorselect;

    if (isEditing) {
      SubjectCtx.updateSubject(subjectID, {
        subjectName: SubName,
        color: colorforEdit && colorselect,
      });
    } else {
      //http
      createSubject({ subjectName: SubName, gID: GradeID, color: colorselect });

      SubjectCtx.addSubject({
        subjectName: SubName,
        gID: GradeID,
        color: colorselect,
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AdminForm
        labelName1="Grade"
        labelName2="Subject"
        Grade={Grade}
        onCancel={cancleHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValuesForEdit={subjectDataForForm}
        GradeValueForNewSubject={addNewSubjectGradeValue}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color="green"
            size={36}
            onPressProp={deleteSubject}
          />
        </View>
      )}
    </View>
  );
};

export default ManageSubjectScreen;

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
});
