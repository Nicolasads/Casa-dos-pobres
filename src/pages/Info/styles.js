import { StyleSheet} from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    backButtom: {
        marginTop: 10,
        marginLeft: 2
    },
    logo: {
        width: 350,
        height: 80
    },
    header: {
       flexDirection: "row",
       marginTop: 20,
       justifyContent: 'center'
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
    carousel: {
        marginTop: 20,
        alignItems: 'center',
        width: 360,
        marginLeft: 12,
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
        width: 330,
        height: 250,
        borderRadius: 5
    },
    description: {
        marginTop: 10,
        width: 320,
        textAlign: "left",
        marginBottom: 15,
        fontSize: 14,
    },
    info: {
        alignItems: 'center',
        marginTop: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#629648'
    },
    information: {
        flexDirection: "row",
        marginTop: 8
    },
    headerInfo: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 8
    },  
    left: {
    marginLeft: 4,
    marginBottom: 25,
    },
    desc: {
        width: 205
    },
    headerTitle: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 20,
        color: "#629648"
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