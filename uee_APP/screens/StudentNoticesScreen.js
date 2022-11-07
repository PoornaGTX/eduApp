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
import StudentNotice from "../components/StudentNotice";
import { Colors } from "../constants/styles";

//route will resive to any registred screens
const StudentNoticesScreen = ({ route }) => {
  const navigation = useNavigation();
  //   const gradeID = route.params.singlegardeID; ////this contain gradeID 'Grade 1'

  const { getAllSubjects, subjects, getAllNoticesStd, studentNotices } =
    useAppContext();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getAllNoticesStd();
      console.log("##################################");
      console.log(studentNotices);
      console.log("##################################");
    }
  }, [isFocused]);

  const renderNoticeItem = (itemData) => {
    console.log("##################################");
    console.log(itemData);
    console.log("##################################");
    return (
      <View style={styles.singleNotice}>
        <StudentNotice
          labelName2={itemData.item.title}
          titleProp={itemData.item.title}
          descriptionProp={itemData.item.description}
          linkProp={itemData.item.link}
          dateProp={itemData.item.date}
        />
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={studentNotices}
        keyExtractor={(item) => item._id}
        renderItem={renderNoticeItem}
        style={{ backgroundColor: "#FEFEFE" }}
      />
    </View>
  );
};

export default StudentNoticesScreen;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: Colors.primaryBackgroud,
  },
  singleNotice: {
    backgroundColor: "#432C7A",
    marginBottom: 10,
    marginTop: 10,
    padding: 15,
  },
});
