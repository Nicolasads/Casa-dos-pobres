import { StyleSheet, Dimensions } from'react-native';

const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
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
        width: 310,
        height: 100,
        resizeMode: 'contain',
        marginTop: 30,
        marginBottom: 20,
    },
    textoTopo: {
        fontSize: 17,
        color: '#629648',
        fontWeight: 'bold',
    },
    optionView: {
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 40,
        width: WIDTH - 40,
        alignItems: "center",
        shadowOffset: {width: 0, height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 2.5,
        elevation: 3,
        marginRight: 12,
        backgroundColor: "#fff"
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
    proceed: {
        marginTop: 10,
        marginLeft: 240,
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
       
        width: 200,
        height: 80,
        alignItems: 'center'
    },

    alimenticia: {
        width: 150,
        height: 90,
        resizeMode: 'contain',
    },

    financeira: {
        width: 150,
        height: 90,
        resizeMode: 'contain',
    }
});