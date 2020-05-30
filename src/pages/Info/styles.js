import { StyleSheet, Dimensions} from "react-native";

const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButtom: {
        marginTop: 10,
    },
    logo: {
        width: 300,
        height: 80,
        resizeMode: 'contain'
    },
    header: {
       flexDirection: "row",
       marginTop: 20,
       justifyContent: 'center',
       alignItems: 'center'
    },
    tutorial: {
        textAlign: 'center',
        width: 280,
        fontSize: 15,
        color: "#919191"
    },
    arrow: {
        marginTop: 12,
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carousel: {
        width: 340,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,

        elevation: 5,
    },
    carouselText: {
        marginTop: 25,
        fontSize: 20,
        color: "#629648",
        fontWeight: '700'
    },
    image: {
        marginTop: 12,
        width: WIDTH - 70,
        height: 250,
        borderRadius: 5,
    },
    description: {
        marginTop: 10,
        width: 300,
        textAlign: "left",
        marginBottom: 15,
        fontSize: 14,
    },
    info: {
        marginTop: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#629648',
        alignSelf: 'center'
    },
    information: {
        flexDirection: 'row',
        marginTop: 12,
        marginLeft: 8
    },
    headerInfo: {
        marginTop: 25,
        marginBottom: 8,
        flexDirection: "row"
    },  
    left: {
        marginLeft: 4,
        marginBottom: 25,
    },
    desc: {
        width: 205
    },
    headerTitle: {
        fontSize: 20,
        color: "#629648",
        marginLeft: 10,
        marginTop: 5
    },
    highlight: {
        color: '#106b34',
        fontWeight: '700'
    },
    highlightphone: {
        color: 'green',
        fontWeight: '700',
        marginLeft: 5,
    },
    phone: {
        marginLeft: 5,
    },
  });