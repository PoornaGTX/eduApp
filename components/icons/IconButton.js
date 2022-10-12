import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, color, onPressProp }) => {
  return (
    <Pressable
      onPress={onPressProp}
      style={({ pressed }) => pressed && style.pressed}
    >
      <Ionicons name={icon} size={30} color={color} />
    </Pressable>
  );
};

export default IconButton;

const style = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
