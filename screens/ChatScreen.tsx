import { StyleSheet, FlatList } from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem/ChatListItem';
import ChatRooms from '../data/ChatRooms';
import MessageButton from '../components/MessageButton';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <MessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
