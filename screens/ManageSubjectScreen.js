import { useLayoutEffect } from "react";
import { Text } from "react-native";

const ManageSubjectScreen = ({ route, navigation }) => {
  const subjectID = route.params?.subID;
  const isEditing = !!subjectID;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Subject" : "Add Subject",
    });
  }, [navigation, isEditing]);

  return <Text>{subjectID}</Text>;
};

export default ManageSubjectScreen;
