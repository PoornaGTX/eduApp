import { useLayoutEffect, useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/core";

//components
import SubjectGirdTitle from "../components/SubjectGirdTitle";
import IconButton from "../components/icons/IconButton";
import { KnowledgelabContext } from "../store/KLab-context";

//LoadingOverlay
import LoadingOverLay from "../components/LoadingOverLay/LoadingOverLay";

//context
import { useAppContext } from "../context/appContext";
import { user } from "../App";
import SingleSubject from "../components/SingleSubject";

//route will resive to any registred screens
const MySubjects = ({ route }) => {
  const navigation = useNavigation();
  //   const gradeID = route.params.singlegardeID; ////this contain gradeID 'Grade 1'

  const { getAllSubjects, subjects } = useAppContext();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getAllSubjects();
    }
  }, [isFocused]);

  const displaySubjects = subjects.filter((singleSubject) => {
    return singleSubject.gID === user.grade;
  });

  //for header button for adding new subject
  const headerButtonHandler = () => {
    navigation.navigate("ManageSubjects", { gradeNameID: gradeID });
  };

  const renderSubjectItem = (itemData) => {
    return (
      <SingleSubject
        subjectName={itemData.item.subjectName}
        subjectcolor={itemData.item.color}
        subjectID={itemData.item._id}
        Grade={user.grade}
      />
    );
  };

  //header Button

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="add-circle"
            color="black"
            size={24}
            onPressProp={headerButtonHandler}
          />
        );
      },
    });
  }, []);

  //get all subjects

  if (subjects.length === 0) {
    return <Text style={styles.infoText}>No subjects availble</Text>;
  }

  return (
    <View>
      <Text>Time table</Text>
      <FlatList
        data={displaySubjects}
        keyExtractor={(item) => item._id}
        renderItem={renderSubjectItem}
        numColumns={2}
      />
    </View>
  );
};

export default MySubjects;

const styles = StyleSheet.create({
  infoText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
