import moment from 'moment';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, } from 'react-native';
import { User } from '../../types';
import styles from './stylest';
import { useNavigation } from '@react-navigation/native';

export type ContactListItemProps = {
    user: User;
}


const ContactListItem = (props: ContactListItemProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onClick = () => {

    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                    </View>
                </View >
            </View >
        </TouchableWithoutFeedback>
    )
}
export default ContactListItem;