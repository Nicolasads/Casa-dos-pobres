import React, { useRef, useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, AsyncStorage, Alert } from 'react-native';
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
        ['@CasaDosPobres:userToken', user.jwt]
      ])
      setLogged(true)
    } catch (e) {
      Alert.alert("Ops", "Erro ao salvar token")
    }
  }
  const authenticate = async () => {
    if (name.length === 0 || email.length === 0 || cpf.length === 0 || pass.length === 0) {
      Alert.alert("Ops", "Preencha os campos Vazios")
      return
    } else {
      if (login.length < 14) {
        Alert.alert("CPF Invalida", "Exemplo de CPF: 008.180.760-03")
        return
      }
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

      await saveUser(usuario)  // salvar dados no AsyncStorage
      if (response.data.success) {
        Alert.alert("bem vindo", "Cadastro realizado com sucesso")
      }

      setLoading(false);
    } catch (e) {
      let error = e.response.data.error;
      if (error === "Este e-mail ou CPF já existe na base de dados") {
        Alert.alert("Ops", "Não possivel fazer o cadastro, e-mail ou CPF já cadastrado")
      } else {
        if (error === "O e-mail enviado não é válido") {
          Alert.alert("Ops", "E-mail digitado invalido")
        } else {
          Alert.alert("Ops", "Parece que houve um problema ao tentar fazer o agendamento. Tente novamente.")
        }
      }
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
              : <Text style={styles.submitText}>Cadastrar</Text>}
          </LinearGradient >
        </TouchableOpacity>
        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registerText}>Já é cadastrado? <Text style={styles.link}>Entre</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}