import React, { createContext, useState } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import api from '../services/api'

const AuthContext = createContext({ logged: false, signIn: () => { }, setLogged: () => { }, setJwt: () => { }, jwt: "", deleteJwt: () => { }, setUser: () => { }, user: "" })

export const AuthProvider = ({ children }) => { // passando o filhos para dentro do fx
    const [user, setUser] = useState(null)
    const [logged, setLogged] = useState(false)
    const [jwt, setJwt] = useState('')

    async function deleteJwt() {
        try {
            await AsyncStorage.removeItem('@CasaDosPobres:userToken') //pegando o tokendo do banco do celular
            const token = await AsyncStorage.getItem('@CasaDosPobres:userToken') //pegando o tokendo do banco do celular

            if (token == null) {
                setLogged(false)
            }
        } catch (e) {
            Alert.alert("Ops", "Parece que houve um Erro")
        }
    }

    async function saveUser(jwt = null) {
        try {
            if (jwt != null) {
                await AsyncStorage.setItem('@CasaDosPobres:userToken', jwt)
                setJwt(jwt)
                api.defaults.headers['x-api-key'] = jwt
                setLogged(true)
            }
        } catch (e) {
            console.log(e)
        }
    }

    async function signIn(credentials) {
        try {
            const response = await api.post('doador/login', credentials);
            //setUser(response.data);
            if (response.data.jwt) {
                await saveUser(response.data.jwt)  // salvar dados no AsyncStorage
            }
        } catch (e) {
            let error = e.response.data.error;
            if(error === "Acesso negado"){
                Alert.alert("Ops","Senha ou e-mail informado invalido")
            }else{
                Alert.alert("Ops", "Parece que houve um problema ao tentar fazer o Login. Tente novamente.")
            }
        }

    }
    return (
        <AuthContext.Provider value={{ logged, signIn, user, setLogged, setJwt, jwt, deleteJwt, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;