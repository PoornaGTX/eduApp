import { useLayoutEffect, useContext } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SubjectGirdTitle from "../components/SubjectGirdTitle";
import IconButton from "../components/icons/IconButton";
import { KnowledgelabContext } from "../store/KLab-context";

//route will resive to any registred screens
const GradeSubjects = ({ route }) => {
  const navigation = useNavigation();
  const gradeID = route.params.singlegardeID;

  const SubjectCtx = useContext(KnowledgelabContext);
  const Subjects = SubjectCtx.subjects;

  const displaySubjects = Subjects.filter((singleSubject) => {
    return singleSubject.gID === gradeID;
  });

  //for header button for adding new subject
  const headerButtonHandler = () => {
    navigation.navigate("ManageSubjects", { gradeNameID: gradeID });
  };

  const renderSubjectItem = (itemData) => {
    return (
      <SubjectGirdTitle
        subjectName={itemData.item.subjectName}
        subjectcolor={itemData.item.color}
        subjectID={itemData.item.id}
        Grade={gradeID}
      />
    );
  };

  //header Button

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="add"
            color="black"
            size={24}
            onPressProp={headerButtonHandler}
          />
        );
      },
    });
  }, []);

  if (displaySubjects.length === 0) {
    return <Text style={styles.infoText}>No subjects availble</Text>;
  }

  return (
    <FlatList
      data={displaySubjects}
      keyExtractor={(item) => item.id}
      renderItem={renderSubjectItem}
      numColumns={2}
    />
  );
};

export default GradeSubjects;

const styles = StyleSheet.create({
  infoText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
