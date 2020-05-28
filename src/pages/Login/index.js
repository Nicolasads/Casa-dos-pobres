import React, { useRef, useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputMask } from 'react-native-masked-text';

import styles from './style';
import AuthContext from '../../contexts/authContext'

export default function Login() {
  const {signIn} = useContext(AuthContext)
  const navigation = useNavigation();
  const passRef = useRef();
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const authenticate = async () => {
    if (login.length === 0 || pass.length === 0) {
      alert("Preencha os campos Vazios")
      return
    }

    setLoading(true);
    try {
      const credentials = {
        cpf: login.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''),
        senha: pass
      };
      await signIn(credentials)
      setLoading(false);
    } catch (e) {
      console.log(e);
      alert(e + " tente novamente")
      setLoading(false);
    }
  }

  return (
    
    <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
      <Text style={styles.header}>Entrar</Text>
      <View style={styles.form}>
        <TextInputMask style={styles.input}
          type={'cpf'}
          placeholder="CPF"
          placeholderTextColor="#999999"
          keyboardType="numeric"
          returnKeyType="next"
          onChangeText={(cpf) => setLogin(cpf)}
          value={login}
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