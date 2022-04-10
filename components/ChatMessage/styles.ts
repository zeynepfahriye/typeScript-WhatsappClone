import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    messageBox: {
        borderRadius: 10,
        padding: 10
    },
    messageContainer: {
        padding: 10
    },
    time: {
        alignSelf: 'flex-end',
        color: 'grey'
    },
    name: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginBottom: 5
    },
    message: {
        marginVertical: 3,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15
    }
});
export default styles;