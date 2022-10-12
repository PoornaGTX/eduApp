import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Subjects } from "../dummyData/data";
import SubjectGirdTitle from "../components/SubjectGirdTitle";
import IconButton from "../components/icons/IconButton";

//route will resive to any registred screens
const GradeSubjects = ({ route }) => {
  const navigation = useNavigation();
  const gradeID = route.params.singlegardeID;

  const displaySubjects = Subjects.filter((singleSubject) => {
    return singleSubject.gID === gradeID;
  });

  const renderSubjectItem = (itemData) => {
    return (
      <SubjectGirdTitle
        subjectName={itemData.item.subjectName}
        subjectcolor={itemData.item.color}
      />
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="add" color="black" />;
      },
    });
  }, []);

  return (
    <View>
      <FlatList
        data={displaySubjects}
        keyExtractor={(item) => item.id}
        renderItem={renderSubjectItem}
        numColumns={2}
      />
    </View>
  );
};

export default GradeSubjects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
