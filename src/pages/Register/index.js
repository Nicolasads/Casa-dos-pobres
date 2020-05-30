import React, { useRef, useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputMask } from 'react-native-masked-text';


import AuthContext from '../../contexts/authContext'
import styles from './style';
import api from '../../services/api'

export default function Register() {
  const navigation = useNavigation();
  const { setLogged } = useContext(AuthContext)
  const emailRef = useRef();
  const cpfRef = useRef();
  const passRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
 



  async function saveUser(user) {
    try {

      await AsyncStorage.multiSet([
        ['@CasaDosPobres:userToken', user.jwt],
        // ['@CasaDosPobres:userId', JSON.stringify(user.id)],
        // ['@CasaDosPobres:userName', JSON.stringify(user.nome)]
      ])
      setLogged(true)
    } catch (e) {
      alert("Erro ao salvar token" + e)
    }
  }
  const authenticate = async () => {
    if (name.length === 0 || email.length === 0 || cpf.length === 0 || pass.length === 0) {
      alert("Preencha os campos Vazios")
      return
    }

    setLoading(true);
    try {
      const credentials = {
        nome: name,
        email: email,
        senha: pass,
        cpf: cpf.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
      };
      const response = await api.post('doador/new', credentials);
      
      const usuario = response.data.usuario
      //alert(JSON.stringify(usuario.jwt))
      
      await saveUser(usuario)  // salvar dados no AsyncStorage
      if (response.data.success) {
        alert(response.data.success)
      } else {
        if (response.data.error) {
          alert(response.date.error)
        }
      }

      setLoading(false);
    } catch (e) {
      console.log(e);

      alert(e + " tente novamente")
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro</Text>
      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#999999"
          autoCapitalize="words"
          returnKeyType="next"
          onChangeText={(name) => setName(name)}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <FontAwesome style={styles.formIcon} name="user" size={24} color="#999999" />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999999"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          ref={emailRef}
          onChangeText={(email) => setEmail(email)}
        />
        <MaterialCommunityIcons style={styles.formIcon} name="email" size={24} color="#999999" />
      </View>
      <View style={styles.form}>
        <TextInputMask style={styles.input}
          type={'cpf'}
          placeholder="CPF"
          placeholderTextColor="#999999"
          keyboardType="numeric"
          returnKeyType="next"
          ref={cpfRef}
          onChangeText={(cpf) => setCpf(cpf)}
          value={cpf}
          onSubmitEditing={() => passRef.current.focus()}
        />
        <MaterialCommunityIcons style={styles.formIcon} name="file-document-box-outline" size={24} color="#999999" />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999999"
          secureTextEntry={true}
          returnKeyType="send"
          ref={passRef}
          onChangeText={(pass) => setPass(pass)}
          onSubmitEditing={() => authenticate()}
        />
        <MaterialIcons style={styles.formIcon} name="lock" size={24} color="#999999" />
      </View>
      <View style={styles.form}>
        <TouchableOpacity style={styles.submitButtom} onPress={() => authenticate()}>
          <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1.1, 1.9]} end={[0.2, 1.1]} style={styles.submit} >
            {loading ? <ActivityIndicator size="small" color="#fff" />
              : <Text style={styles.submitText}>Entrar</Text>}
          </LinearGradient >
        </TouchableOpacity>
        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registerText}>Já é cadastrado? <Text style={styles.link}>Entre</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}