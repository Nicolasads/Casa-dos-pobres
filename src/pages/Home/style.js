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
       borderRadius: 0,
       marginTop: 12,
       marginBottom: 20,
       width: WIDTH - 40,
       alignItems: "center",
       shadowOffset: {width: 0, height: 2,},
       shadowOpacity: 0.25,
       shadowRadius: 2.5,
       elevation: 3,
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
    },
    scrollHorizontal:{
        marginRight: 12,
    },
    showInfo: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 20
    },
    infoText: {
        fontSize: 16,
        color: "#717171",
        marginRight: 6,
    },
    buttomInfo: {
        fontSize: 16,
        color: "#106b34",
        fontWeight: '700'
    }
});