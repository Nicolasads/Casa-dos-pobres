import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    logo: {
        marginTop: 40,
        width: 330,
        height: 100,
    },
    optionView: {
       marginTop: 12,
       marginBottom: 20,
       borderColor: '#999999',
       borderWidth: 1,
       borderRadius: 5,
       width: WIDTH - 40,
       alignItems: "center"
    },
    money: {
        marginTop: 15,
        width: 100,
        height: 100,
    },
    title: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: '700',
        color: '#629648',
        borderBottomWidth: 3,
        borderColor: '#629648'
    },
    description: {
      marginTop: 12,
      width: 300,
      textAlign: 'center',
      color: '#629648'
    },
    bold: {
        fontWeight: '700'
    },
    proceed: {
        marginTop: 10,
        marginLeft: 240,
        marginBottom: 20
    },
    buttom: {
        backgroundColor: 'blue',
        borderRadius: 30,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    others: {
        marginTop: 15,
        width: 280,
        height: 80,
        alignItems: 'center'
    }
});