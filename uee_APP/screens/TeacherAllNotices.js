import { useLayoutEffect, useEffect } from "react";
import { FlatList } from "react-native";
import IconButton from "../components/icons/IconButton";
import { useAppContext } from "../context/appContext";
import { useIsFocused } from "@react-navigation/core";
import TeacherNoticeGirdTitle from "../components/TeacherNoticeGridTile";

const TeacherAllNotices = ({ navigation }) => {
  const { teacherGetAllNotices, teacherAllNotices, logOutUser, user } =
    useAppContext();
  const isFocused = useIsFocused();

  const renderNoticeItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("Subjects", { singleNoticeID: itemData.item.title });
    };

    return (
      <TeacherNoticeGirdTitle
        grade={itemData.item.title}
        color={itemData.item.color}
        _id={itemData.item._id}
        onPressProp={pressHandler}
      />
    );
  };

  const headerButtonHandler = () => {
    navigation.navigate("AddNotice");
  };

  useEffect(() => {
    if (isFocused) {
      teacherGetAllNotices();
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
      headerLeft: () => {
        return (
          <IconButton icon="exit" size={24} onPressProp={() => logOutUser()} />
        );
      },
    });
  }, []);

  return (
    <FlatList
      data={teacherAllNotices}
      keyExtractor={(item) => item._id}
      renderItem={renderNoticeItem}
      numColumns={2}
      style={{ backgroundColor: "#FEFEFE" }}
    />
  );
};

export default TeacherAllNotices;
