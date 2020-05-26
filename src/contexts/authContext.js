import React, { createContext, useState } from 'react'
import { AsyncStorage } from 'react-native'
import api from '../services/api'

const AuthContext = createContext({ logged: false, signIn: () => {}, setLogged: () => {}, setJwt: () => {}, jwt: "" })

export const AuthProvider = ({ children }) => { // passando o filhos para dentro do fx
    const [user, setUser] = useState(null)
    const [logged, setLogged] = useState(false)
    const [ jwt, setJwt ] = useState('')
    
    async function saveUser(jwt = null) {
        try {
            if (jwt != null) {
                await AsyncStorage.setItem('@CasaDosPobres:userToken', JSON.stringify(jwt))
                setJwt(jwt)
                setLogged(true)
            } else {
                alert(jwt)
            }
        } catch (e) {
            return alert("Erro ao salvar token" + e)
        }
    }

    async function signIn(credentials) {
        try {
            const response = await api.post('doador/login', credentials);
            //setUser(response.data);
            if (response.data.jwt) {
                alert(response.data.jwt)   
                //alert(response.data.jwt)
                await saveUser(response.data.jwt)  // salvar dados no AsyncStorage
            } else {
                if (response.data.error) {
                    alert(response.data.error)
                } else (
                    alert(response.data)
                )
            }
        } catch (e) {
            console.log(e);
            let error = e.response.data.error;
            alert(error + " tente novamente")
        }

    }
    return (
        <AuthContext.Provider value={{ logged, signIn, user, setLogged, setJwt, jwt}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;