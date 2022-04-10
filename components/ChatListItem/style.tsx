import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        backgroundColor: 'red',
        borderRadius: 50,
    },
    midContainer: {
        justifyContent: 'space-around'
    },
    leftContainer: {
        flexDirection: 'row'
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
        flexWrap: 'wrap'
    },
    time: {
        fontSize: 14,
        color: 'grey',

    }
})
export default styles