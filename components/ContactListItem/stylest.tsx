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

})
export default styles