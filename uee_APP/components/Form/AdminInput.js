import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

const AdminInput = ({ label, textInputAllProps, profile, Manage }) => {
  return (
    <View style={styles.inputConainer}>
      <Text style={[styles.label, Manage && { color: "white" }]}>{label}</Text>
      <TextInput {...textInputAllProps} style={styles.input} />
    </View>
  );
};

export default AdminInput;

const styles = StyleSheet.create({
  inputConainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: "white",
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#c6affc",
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: "#2d0689",
  },
});
