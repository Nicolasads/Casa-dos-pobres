import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    //estilo da logo
    logo: {
        marginTop: 40,
        width: 300,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 40,
    },

/*-------------Estilo dos texto iniais e finais-------------- */

    obrigado: {
        fontSize: 17,
        color: '#629648',
        fontWeight: 'bold',
    },

    sucesso: {
        color: '#629648',
        fontWeight: 'bold',
    },

    //Imagem "OK" do centro da página
    ok: {
        marginVertical: 30,
    }

});