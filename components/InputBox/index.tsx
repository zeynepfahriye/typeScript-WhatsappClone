import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './style';
const InputBox = () => {
    const [message, setMessage] = useState('');
    const onClickMicrophone = () => {
        console.log('a')
    }
    const onClickSend = () => {
        console.log('b')
    }
    const onClick = () => {
        if (!message) {
            onClickMicrophone();
        } else {
            onClickSend();
        }
    }
    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputBox}>
                <FontAwesome5 name='laugh-beam' size={24} color='grey' />
                <TextInput
                    placeholder='Type a message '
                    multiline
                    value={message}
                    onChangeText={setMessage}
                    style={styles.textInput} />
                <Entypo name="attachment" size={24} color='grey' style={styles.icon} />
                {!message && <Fontisto name="camera" size={24} color='grey' tyle={styles.icon} />}

            </View>
            <TouchableOpacity onPress={onClick}>
                <View style={styles.buttonCont}>
                    {
                        !message ? <MaterialCommunityIcons name='microphone' size={30} color='white' />
                            : <MaterialIcons name='send' size={24} color='white' />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default InputBox