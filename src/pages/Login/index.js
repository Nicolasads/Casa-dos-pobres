import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import styles from './style';
import api from '../../services/api'

export default function Login() {
  const navigation = useNavigation();
  const passRef = useRef();
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(null);

  async function saveUser(user) {
    try {
      await AsyncStorage.setItem('@CasaDosPobres:userToken', JSON.stringify(user))
    } catch (e) {
      alert("Erro ao salvar token" + e)
    }
  }
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@CasaDosPobres:userToken') //pegando o tokendo do banco do celular
  //     if (value !== null) {
  //       setJwt(value)
  //     }
  //   } catch (e) {
  //     alert(e)
  //   }
  // }

  const authenticate = async () => {
    if (login.length === 0 || pass.length === 0) {
      alert("Preencha os campos Vazios")
      return
    }

    setLoading(true);
    try {
      const credentials = {
        cpf: login,
        senha: pass
      };
      const response = await api.post('doador/login', credentials);

      setUser(response.data);

      await saveUser(user)  // salvar dados no AsyncStorage

      navigation.navigate('Home')

      setLoading(false);

      // props.navigation.dispatch(resetAction)
    } catch (e) {
      console.log(e);
      let error = e.response.data.error;
      alert(error + " tente novamente")
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Entrar</Text>
      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#999999"
          keyboardType="numeric"
          returnKeyType="next"
          maxLength={11}
          onChangeText={(cpf) => setLogin(cpf)}
          onSubmitEditing={() => passRef.current.focus()} />
        <MaterialCommunityIcons style={styles.formIcon} name="file-document-box-outline" size={24} color="#999999" />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999999"
          secureTextEntry={true}
          ref={passRef}
          autoCapitalize="none"
          onChangeText={(pass) => setPass(pass)}
          onSubmitEditing={() => authenticate()} />
        <MaterialIcons style={styles.formIcon} name="lock" size={24} color="#999999" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <View style={styles.form}>
        <TouchableOpacity style={styles.submitButtom}
          onPress={() => authenticate()}>
          <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1.1, 1.9]} end={[0.2, 1.1]} style={styles.submit} >
            {loading ? <ActivityIndicator size="small" color="#fff" />
              : <Text style={styles.submitText}>Entrar</Text>}
          </LinearGradient >
        </TouchableOpacity>
        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Não tem conta? <Text style={styles.link}>Cadastre-se</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}