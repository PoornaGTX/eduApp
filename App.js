import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import GradesScreen from "./screens/GradesScreen";

export default function App() {
  return <GradesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
