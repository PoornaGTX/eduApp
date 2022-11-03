import { useLayoutEffect, useEffect } from "react";
import { FlatList } from "react-native";

import GradeGirdTitle from "../components/GradeGirdTitle";
import IconButton from "../components/icons/IconButton";

import { useAppContext } from "../context/appContext";
import { useIsFocused } from "@react-navigation/core";

const GradesScreen = ({ navigation }) => {
  const { getAllGrades, grades } = useAppContext();
  const isFocused = useIsFocused();

  const renderGradesItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("Subjects", { singlegardeID: itemData.item.Grade });
    };

    return (
      <GradeGirdTitle
        grade={itemData.item.Grade}
        color={itemData.item.color}
        onPressProp={pressHandler}
      />
    );
  };

  const headerButtonHandler = () => {
    navigation.navigate("ManageGrade");
  };

  useEffect(() => {
    if (isFocused) {
      getAllGrades();
    }
  }, [isFocused]);

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

  return (
    <FlatList
      data={grades}
      keyExtractor={(item) => item._id}
      renderItem={renderGradesItem}
      numColumns={2}
    />
  );
};

export default GradesScreen;
