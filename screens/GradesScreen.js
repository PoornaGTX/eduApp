import { Text, FlatList } from "react-native";

import { grades } from "../dummyData/data";
import GradeGirdTitle from "../components/GradeGirdTitle";

const GradesScreen = ({ navigation }) => {
  const renderGradesItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("Subjects", { singlegardeID: itemData.item.id });
    };

    return (
      <GradeGirdTitle
        grade={itemData.item.Grade}
        color={itemData.item.color}
        onPressProp={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={grades}
      keyExtractor={(item) => item.id}
      renderItem={renderGradesItem}
      numColumns={2}
    />
  );
};

export default GradesScreen;
