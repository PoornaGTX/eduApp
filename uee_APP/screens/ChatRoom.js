import { useLayoutEffect, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import IconButton from "../components/icons/IconButton";
import TeacherNoticeGirdTitle from "../components/TeacherNoticeGridTile";
import { useAppContext } from "../context/appContext";

const ChatRoom = ({ route, navigation }) => {
  const [message, setMessage] = useState("");
  const { user, getAllMessages, messages, 
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

  const renderNoticeItem = (itemData) => {
    return (
      <TeacherNoticeGirdTitle
        grade={itemData.item.message}
        color="#c6affc"
        _id={itemData.item._id}
      />
    );
  };

  useEffect(() => {
    getAllMessages(user.firstName)
  }, [messages]);

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
      <FlatList
        data={messages}
        keyExtractor={(item) => item._id}
        renderItem={renderNoticeItem}
        numColumns={2}
        style={{backgroundColor:"#FEFEFE"}}
      />
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
