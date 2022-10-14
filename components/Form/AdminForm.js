import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import AdminInput from "./AdminInput";
import Button from "../icons/Button";

const AdminForm = ({
  labelName1,
  labelName2,
  Grade,
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValuesForEdit,
  GradeValueForNewSubject,
}) => {
  const [subjectValue, setSubjectValue] = useState(
    defaultValuesForEdit ? defaultValuesForEdit.subjectName : ""
  );

  const subjectChangeHandler = (enteredAmount) => {
    setSubjectValue(enteredAmount);
  };

  const sumbitHandler = () => {
    onSubmit(subjectValue);
  };

  // let subjectStatus = true;

  // if (submitButtonLabel === "Update") {
  //   subjectStatus = false;
  // }

  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Subject Manager</Text>
      <AdminInput
        label={labelName1}
        textInputAllProps={{
          value: Grade || GradeValueForNewSubject,
          editable: false,
        }}
      />
      <AdminInput
        label={labelName2}
        textInputAllProps={{
          onChangeText: subjectChangeHandler,
          value: subjectValue,
        }}
      />
      <View style={styles.buttons}>
        <Button mode="flat" onPressProp={onCancel} style={styles.button}>
          Cancle
        </Button>
        <Button onPressProp={sumbitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default AdminForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 16,
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
