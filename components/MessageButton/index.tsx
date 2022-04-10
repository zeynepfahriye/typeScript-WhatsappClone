import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
const MessageButton = () => {
    const navigation = useNavigation();
    const messageButtonClick = () => {
        navigation.navigate('Contact')
    }
    return (
        <View style={styles.messageContainer}>
            <TouchableOpacity
                onPress={() => messageButtonClick()}>
                <MaterialCommunityIcons name="message-reply-text" size={28} color='white' />
            </TouchableOpacity >
        </View>
    )
}

export default MessageButton