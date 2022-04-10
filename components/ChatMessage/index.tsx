import moment from 'moment';
import React from 'react';
import { Text, View, Image } from 'react-native'
import styles from './styles'
import { Message } from '../../types';

export type ChatMessageProps = {
    message: Message;
}


const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;


    const isMyMessage = () => {
        return message.user.id === 'u1';
    }
    return (
        <View style={styles.messageContainer}>

            <View style={[styles.messageBox, { backgroundColor: isMyMessage() ? '#DCF8C5' : 'white', marginLeft: isMyMessage() ? 50 : 0, marginRight: isMyMessage() ? 0 : 50 }]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View >
    )
}
export default ChatMessage;