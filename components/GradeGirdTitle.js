import { View, Text, Pressable } from "react-native";

const GradeGirdTitle = ({ grade, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{grade}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default GradeGirdTitle;
