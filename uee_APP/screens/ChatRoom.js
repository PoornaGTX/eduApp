import { useLayoutEffect, useEffect, useState,Button } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import IconButton from "../components/icons/IconButton";
import { useAppContext } from "../context/appContext";

const ChatRoom = ({ route, navigation }) => {
  const [message, setMessage] = useState("");
  const { user, getAllMessages,
    sendMessage} = useAppContext()
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Group chat",
    });
  }, [navigation]);

  const handleSendMessage = () => {
    sendMessage({
        messageSender:user.firstName,
        chatRoomOwner:user.firstName, 
        message:message
    })
  }
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
        
        <View style={styles.sendMessageSection}>
            <TextInput
                style={styles.input}
                onChangeText={setMessage}
                value={message}
                placeholder="Send message"
            />
            <IconButton
                icon="send"
                color="purple"
                size={36}
                onPressProp={handleSendMessage}
            />
      </View>
        <View style={styles.inputConainer}>
            <Text style={styles.label}>Chat room</Text>
        </View>
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:"flex",
    flexDirection:'column-reverse',
    padding: 24,
    backgroundColor: "#200364",
  },
  inputConainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: "#c6affc",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#c6affc",
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: "#2d0689",
    width: "100%",
    marginRight: 4
  },

  sendMessageSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginRight: 20,
  }

});
