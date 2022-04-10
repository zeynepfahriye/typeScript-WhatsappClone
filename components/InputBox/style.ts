import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        margin: 10
    },
    inputBox: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 50,
        marginRight: 10,
        flex: 1,

    },
    buttonCont: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textInput: {
        flex: 1,
        marginHorizontal: 10
    },
    icon: {
        marginHorizontal: 7
    }
})
export default styles;