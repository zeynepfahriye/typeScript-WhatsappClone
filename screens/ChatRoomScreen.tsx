import React from 'react';

import { useRoute } from '@react-navigation/native';
import { FlatList, ImageBackground } from 'react-native';
import chatRoomData from '../data/Chat'
import ChatMessage from '../components/ChatMessage';
import wpBack from '../assets/images/wpBack.png';
import InputBox from '../components/InputBox';
const ChatRoomScreen = () => {

    const route = useRoute();

    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={wpBack}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
            />
            <InputBox />
        </ImageBackground>
    )
}
export default ChatRoomScreen;