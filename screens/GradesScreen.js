import { Text, FlatList } from "react-native";

import { grades } from "../dummyData/data";
import GradeGirdTitle from "../components/GradeGirdTitle";

const renderGradesItem = (itemData) => {
  return (
    <GradeGirdTitle grade={itemData.item.Grade} color={itemData.item.color} />
  );
};

const GradesScreen = () => {
  return (
    <FlatList
      data={grades}
      keyExtractor={(item) => item.id}
      renderItem={renderGradesItem}
    />
  );
};

export default GradesScreen;
