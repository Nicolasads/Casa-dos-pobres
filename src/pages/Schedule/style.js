import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f1f1f1",
    },

    //Estilo da logo
    logo: { 
        marginTop: 40,
        width: 300,
        height: 100,
        resizeMode: 'contain',
    },

    //Estilo do campo onde se encontra os 2 formulários da página
    box: {
        borderRadius: 0,
        width: WIDTH - 40,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 2.5,
        elevation: 3,
    },

    //título do formulário
    textBox: {
        marginStart: 0,
        color: '#629648',
        fontWeight: 'bold',
        marginTop: 20,
    },

    form: {
        marginTop: 10,
    },

    //Input mais utilizado nos formulários onde ocupa a linha inteira
    inputPadrao: {
        borderRadius: 18,
        width: WIDTH - 80,
        height: 50,
        fontSize: 16,
        backgroundColor: '#dedede',
        marginTop:10,
        padding: 8,
        paddingLeft: 15,
    },

    /* ------ estilo dos campos DATA, HORA E QTD -------- */

    InputsLine: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: WIDTH - 80,
        flex: 0,
    },

    inputData: {
        borderRadius: 18,
        height: 50,
        fontSize: 16,
        backgroundColor: '#dedede',
        width: 105,
        paddingTop: 10,
        paddingLeft: 15,
        flex: 2,
        marginRight: 7,
    },

    inputHora: {
        borderRadius: 18,
        height: 50,
        fontSize: 16,
        backgroundColor: '#dedede',
        paddingTop: 10,
        paddingLeft: 15,
        paddingLeft: 15,
        flex: 2,
        marginRight: 7,
    },

    inputQtd: {
        borderRadius: 18,
        height: 50,
        fontSize: 16,
        backgroundColor: '#dedede',
        paddingLeft: 15,
        paddingTop:10,
        flex: 0.7,
    },

    //estilo do caampo item

    inputItem: {
        borderRadius: 18,
        width: WIDTH - 80,
        fontSize: 16,
        backgroundColor: '#dedede',
        marginTop:10,
        paddingTop: 10,
        height: 200,
        paddingLeft: 15
    },

    /*---------- estilos referente ao campo dos botões no fim da página ---------*/

    buttomBox: {
        marginTop: 30,
        marginBottom: 30,
        width: WIDTH - 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    
    buttomBack: {
        borderRadius: 30,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttomTerminate: {
        height: 55,
        width: 230,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },

    terminateText: { //Texto do botão de cocluir
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },

    /*--------- estilos dos campos LGRADOURO e NÚMERO --------*/

    inputLogradouro: {
        borderRadius: 12,
        height: 50,
        fontSize: 16,
        backgroundColor: '#dedede',
        flex: 1,
        paddingTop: 10,
        paddingLeft: 15,
        marginRight: 3.5,
    },

    inputNumero: {
        borderRadius: 12,
        height: 50,
        fontSize: 16,
        backgroundColor: '#dedede',
        flex: 1,
       // width: 50,
        padding: 8,
        paddingLeft: 15,
        marginLeft: 3.5,
    },
});