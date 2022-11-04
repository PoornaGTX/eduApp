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
import { users } from "../dummyData/data";
import SingleTeacher from "../components/SingleTeacher";

//route will resive to any registred screens
const AllTeachersScreen = ({ route }) => {
  const navigation = useNavigation();
  //   const gradeID = route.params.singlegardeID; ////this contain gradeID 'Grade 1'
  const { Grade, subID } = route.params;
  const { getAllSubjects, subjects } = useAppContext();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getAllSubjects();
    }
  }, [isFocused]);

  const displayTeachers = users.filter((singlePerson) => {
    return singlePerson.subId === subID;
  });

  //for header button for adding new subject
  // const headerButtonHandler = () => {
  //   navigation.navigate("ManageSubjects", { gradeNameID: gradeID });
  // };

  const renderSubjectItem = (itemData) => {
    return (
      <SingleTeacher
        name={itemData.item.name}
        grade={itemData.item.grade}
        subId={itemData.item.subId}
        id={itemData.item.id}
      />
    );
  };

  //header Button

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => {
  //       return (
  //         <IconButton
  //           icon="add-circle"
  //           color="black"
  //           size={24}
  //           onPressProp={headerButtonHandler}
  //         />
  //       );
  //     },
  //   });
  // }, []);

  //get all subjects

  if (subjects.length === 0) {
    return <Text style={styles.infoText}>No subjects availble</Text>;
  }

  return (
    <View>
      <FlatList
        data={displayTeachers}
        keyExtractor={(item) => item._id}
        renderItem={renderSubjectItem}
        numColumns={2}
      />
    </View>
  );
};

export default AllTeachersScreen;

const styles = StyleSheet.create({
  infoText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
