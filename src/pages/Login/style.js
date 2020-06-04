import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
    },
    header: {
        fontSize: 35,
        color: '#6F9D3B',
        fontWeight: '700',
    },
    logo: {
        width: 335,
        height: 80,
        marginBottom: 30,
    },  
    form: {
        paddingTop: 20,
    },
    input: {
        borderColor: "#dedede",
        borderWidth: 1,
        borderRadius: 12,
        width: WIDTH - 60,
        height: 50,
        fontSize: 16,
        backgroundColor: '#dedede',
        paddingLeft: 40,
    },
    formIcon: {
        position: "absolute",
        top: 33,
        paddingLeft: 10,
    },
    forgot: {
        paddingTop: 12,
        color: '#969696',
        fontWeight: '700',
        borderBottomWidth: 1,
        borderColor: '#969696',
        fontSize: 14
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
    },
    register: {
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 10
    },
    registerText: {
        fontSize: 13,
        color: "#757575",
        fontWeight: '700'
    },
    link: {
        color: '#629648',
        fontWeight: '700',
        fontSize: 14
    }
});