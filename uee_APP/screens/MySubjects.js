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

import SingleSubject from "../components/SingleSubject";

//route will resive to any registred screens
const MySubjects = ({ route }) => {
  const { user, getAllSubjects, subjects } = useAppContext();
  const [stdSubjects, setStdSubjects] = useState(subjects);
  // console.log(user);
  // let subjects = [];
  const navigation = useNavigation();
  //   const gradeID = route.params.singlegardeID; ////this contain gradeID 'Grade 1'

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getAllSubjects();
      setStdSubjects(subjects);
      console.log("######################");
      console.log(subjects);
      console.log("######################");
    }
  }, [isFocused]);

  const displaySubjects = stdSubjects.filter((singleSubject) => {
    return singleSubject.gID === user.Grade;
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
        subjectID={itemData.item.subjectName}
        Grade={user.Grade}
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

  return (
    <View>
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
