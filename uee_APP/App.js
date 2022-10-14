import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GradesScreen from "./screens/GradesScreen";
import GradeSubjects from "./screens/GradeSubjects";
import ManageSubjectScreen from "./screens/ManageSubjectScreen";
import KnowledgelabContextProvider from "./store/KLab-context";
import ManageGradesScreen from "./screens/ManageGradesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <KnowledgelabContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerStyle: { backgroundColor: "white" } }}
          >
            <Stack.Screen
              name="All Grades"
              component={GradesScreen}
              options={{ contentStyle: { backgroundColor: "white" } }}
            />
            <Stack.Screen
              name="Subjects"
              component={GradeSubjects}
              options={{ contentStyle: { backgroundColor: "white" } }}
            />
            <Stack.Screen
              name="ManageSubjects"
              component={ManageSubjectScreen}
              options={{ presentation: "modal", title: "Manage Subject" }}
            />

            <Stack.Screen
              name="ManageGrade"
              component={ManageGradesScreen}
              options={{ presentation: "modal", title: "Manage Grades" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </KnowledgelabContextProvider>
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
