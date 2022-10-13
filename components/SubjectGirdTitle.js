import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SubjectGirdTitle = ({ subjectName, subjectID, subjectcolor, Grade }) => {
  const navigation = useNavigation();

  const headerButtonHandlerSubject = () => {
    navigation.navigate("ManageSubjects", { subID: subjectID, Grade: Grade });
  };

  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null, //this for ios
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={headerButtonHandlerSubject}
      >
        <View
          style={[styles.innerContainer, { backgroundColor: subjectcolor }]}
        >
          <Text style={styles.title}>{subjectName}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SubjectGirdTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
