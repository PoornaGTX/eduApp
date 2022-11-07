import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../ui/Button";
import Input from "./Input";
import { Dropdown } from "react-native-element-dropdown";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredTeacherSub, setEnteredTeacherSub] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [enteredTeacherDes, setEnteredTeacherDes] = useState("");

  const dropDownData = [
    { label: "Teacher", value: "teacher" },
    { label: "Student", value: "student" },
  ];
  const dropDownDataGrade = [
    { label: "Grade 5", value: "Grade 5" },
    { label: "Grade 6", value: "Grade 6" },
    { label: "Grade 7", value: "Grade 7" },
    { label: "Grade 8", value: "Grade 8" },
    { label: "Grade 9", value: "Grade 9" },
    { label: "Grade 10", value: "Grade 10" },
    { label: "Grade 11", value: "Grade 11" },
    { label: "Grade 12", value: "Grade 12" },
    { label: "Grade 13", value: "Grade 13" },
  ];

  const [dropValue, setDropValue] = useState(null);
  const [dropValueGrade, setdropValueGrade] = useState(null);

  const {
    firstName: firstNameIsInvalid,
    lastName: lastNameIsInvalid,
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
      case "firstName":
        setEnteredFirstName(enteredValue);
        break;
      case "lastName":
        setEnteredLastName(enteredValue);
        break;
      case "subject":
        setEnteredTeacherSub(enteredValue);
      case "description":
        setEnteredTeacherDes(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      teacherSubject: enteredTeacherSub,
      Grade: dropValueGrade,
      type: dropValue,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
      teacherDescription: enteredTeacherDes
    });
  }

  return (
    <View style={styles.form}>
      <View>
        {!isLogin && (
          <Dropdown
            data={dropDownData}
            labelField="label"
            valueField="value"
            value={dropValue}
            onChange={(item) => {
              setDropValue(item.value);
            }}
            style={styles.dropown}
            placeholder="Select Account Type"
          />
        )}

        {!isLogin && (dropValue == "teacher" || dropValue == "student") && (
          <Dropdown
            data={dropDownDataGrade}
            labelField="label"
            valueField="value"
            value={dropValueGrade}
            onChange={(item) => {
              setdropValueGrade(item.value);
            }}
            style={styles.dropown}
            placeholder="Select Grade"
          />
        )}

        {!isLogin && (
          <Input
            label="First Name"
            onUpdateValue={updateInputValueHandler.bind(this, "firstName")}
            value={enteredFirstName}
            // keyboardType=""
            isInvalid={firstNameIsInvalid}
          />
        )}

        {!isLogin && (
          <Input
            label="Last Name"
            onUpdateValue={updateInputValueHandler.bind(this, "lastName")}
            value={enteredLastName}
            // keyboardType=""
            isInvalid={lastNameIsInvalid}
          />
        )}

        <Input
          label="Email Address"
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />

        {!isLogin && dropValue == "teacher" && (
          <Input
            label="Subject"
            onUpdateValue={updateInputValueHandler.bind(this, "subject")}
            value={enteredTeacherSub}
            // isInvalid={lastNameIsInvalid}
          />
        )}

        {!isLogin && dropValue == "teacher" && (
          <Input
            label="description"
            onUpdateValue={updateInputValueHandler.bind(this, "description")}
            value={enteredTeacherSub}
            // isInvalid={lastNameIsInvalid}
          />
        )}

        <Input
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />

        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "confirmPassword"
            )}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
  dropown: {
    borderWidth: 2,
    borderColor: "white",
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 4,
  },
});
