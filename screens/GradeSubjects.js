import { View, FlatList, StyleSheet, Text } from "react-native";

import { Subjects } from "../dummyData/data";

//route will resive to any registred screens
const GradeSubjects = ({ route }) => {
  const gradeID = route.params.singlegardeID;

  const displaySubjects = Subjects.filter((singleSubject) => {
    return singleSubject.gID === gradeID;
  });

  const renderSubjectItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.subjectName}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={displaySubjects}
        keyExtractor={(item) => item.id}
        renderItem={renderSubjectItem}
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
