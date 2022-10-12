import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GradesScreen from "./screens/GradesScreen";
import GradeSubjects from "./screens/GradeSubjects";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerStyle: { backgroundColor: "yellow" } }}
        >
          <Stack.Screen name="All Grades" component={GradesScreen} />
          <Stack.Screen name="Subjects" component={GradeSubjects} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
