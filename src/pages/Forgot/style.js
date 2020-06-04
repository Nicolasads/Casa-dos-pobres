import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
    back: {
        justifyContent: 'center',
        marginLeft: 12,
        paddingTop: 40,
    },  
    container: {
        paddingTop: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
    },
    header: {
        fontSize: 35,
        color: '#6F9D3B',
        fontWeight: '700',
    }, 
    description: {
        color: '#818181',
        paddingTop: 5,
        fontSize: 15
    },
    form: {
        paddingTop: 15,
    },
    input: {
        borderColor: "#dedede",
        borderWidth: 1,
        borderRadius: 15,
        width: WIDTH - 60,
        height: 50,
        fontSize: 16,
        backgroundColor: '#dedede',
        paddingLeft: 40,
    },
    formIcon: {
        position: "absolute",
        top: 28,
        paddingLeft: 10,
    },
    submitButtom: {
        paddingTop: 10,
    },  
    submit: {
        height: 55,
        width: 230,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    submitText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700'
    }
});