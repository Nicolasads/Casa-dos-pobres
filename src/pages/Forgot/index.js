import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import {  useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputMask } from 'react-native-masked-text'

import styles from './style';
import api from '../../services/api'

export default function Login() {
  const navigation = useNavigation();
  const [ loading ,setLoading] = useState('');
  const [ email ,setEmail] = useState('');
  const [ cpf, setCpf] = useState('');

  async function request() {
    if (email.length === 0 || cpf.length === 0) {
      Alert.alert("Ops", "Preencha os campos vazios")
      return
    }else{
      if (cpf.length < 14) {
        Alert.alert("CPF Invalida", "Exemplo de CPF: 008.180.760-03")
        return
      }
    }

    setLoading(true);
    try {
      const credentials = {
        cpf: cpf.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''),
        email: email
      };
      const response = await api.post('doador/recuperar/senha', credentials);
      if(response.data.success){
        Alert.alert("Foi enviado com sucesso o para seu e-email")
        // navigation.navigate('Login')
      }
      setLoading(false);
    } catch (e) {
      let error = e.response.data.error;
            if (error) {
                if (error === "Erro ao recuperar a senha") {
                    Alert.alert("Ops", "Parece que houve um problema ao tentar procurar pelo CPF ou e-mail, não existem na base de dados")
                }
            } else {
              if(error === "Erro ao enviar e-mail"){
                Alert.alert("Ops", "Parece que houve um problema ao tentar enviar o e-mail.")
              }else{
                Alert.alert("Ops", "Parece que houve um problema ao tentar recuperar a senha")
              }
            }
      setLoading(false);
    }
  }
  

  return(
    <KeyboardAvoidingView behavior={Platform.OS == 'android' ? "padding" : "height"} style={{flex: 1}}>
    <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <SimpleLineIcons name="arrow-left" size={24} color="#629648" />
        </TouchableOpacity>
    </View>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <Text style={styles.header}>Esqueci minha senha</Text>
        <Text style={styles.description}>Informe abaixo as seguintes informações</Text>
      <View style={styles.form}>
        <TextInputMask style={styles.input} 
                     type={'cpf'}
                     placeholder="CPF"
                     placeholderTextColor="#999999"
                     keyboardType="numeric"
                     returnKeyType="next"
                     onChangeText={(cpf) => setCpf(cpf)}
                     value={cpf} />
        <MaterialCommunityIcons style={styles.formIcon} name="file-document-box-outline" size={24} color="#999999" />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} 
                    placeholder="Email"
                    placeholderTextColor="#999999"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={(email) => setEmail(email)}/>
        <MaterialCommunityIcons style={styles.formIcon} name="email" size={24} color="#999999" />
      </View>
      <View style={styles.form}>
        <TouchableOpacity style={styles.submitButtom} onPress={() => request()}>
          <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1.1, 1.9]} end={[0.2 , 1.1]} style={styles.submit} >
          {loading ? <ActivityIndicator size="small" color="#fff" />
              : <Text style={styles.submitText}>Enviar</Text>}
          </LinearGradient >
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}