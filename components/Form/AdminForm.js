import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import AdminInput from "./AdminInput";

const AdminForm = ({ labelName1, labelName2, Grade }) => {
  const [subjectValue, setSubjectValue] = useState();

  const subjectChangeHandler = (enteredAmount) => {
    setSubjectValue(enteredAmount);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Subject Manager</Text>
      <AdminInput
        label={labelName1}
        textInputAllProps={{
          value: Grade,
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
});
