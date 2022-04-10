import { StyleSheet, FlatList } from 'react-native';
import { View } from '../components/Themed';
import ContactListItem from '../components/ContactListItem/ContactListItem';
import user from '../data/User';
import MessageButton from '../components/MessageButton';

export default function ContactScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={user}
                renderItem={({ item }) => <ContactListItem user={item} />}
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
