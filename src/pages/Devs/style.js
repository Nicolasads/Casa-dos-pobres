import { StyleSheet, Dimensions} from "react-native";

const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: WIDTH -50,
        resizeMode: "contain"
    },
    header: {
        flexDirection: 'row'
    },
    back: {
       justifyContent: 'center'
    },
    devs: {
        marginLeft: 15,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        color: "#629648",
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 10,
    },
    name: {
        marginBottom: 5,
        fontSize: 15
    }
  });