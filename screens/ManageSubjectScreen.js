import { useLayoutEffect, useContext } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import IconButton from "../components/icons/IconButton";
import Button from "../components/icons/Button";
import { KnowledgelabContext } from "../store/KLab-context";
import AdminForm from "../components/Form/AdminForm";

const ManageSubjectScreen = ({ route, navigation }) => {
  const subjectID = route.params?.subID;
  const Grade = route.params?.Grade;
  const isEditing = !!subjectID;

  const SubjectCtx = useContext(KnowledgelabContext);

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

  const confirmHandler = () => {
    if (isEditing) {
      SubjectCtx.updateSubject(subjectID, { subjectName: "update" });
    } else {
      SubjectCtx.addSubject();
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AdminForm labelName1="Grade" labelName2="Subject" Grade={Grade} />
      <View style={styles.buttons}>
        <Button mode="flat" onPressProp={cancleHandler} style={styles.button}>
          Cancle
        </Button>
        <Button onPressProp={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
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
