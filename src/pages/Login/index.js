import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {  useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import styles from './style';

export default function Login() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
        <Text style={styles.header}>Entrar</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="CPF" placeholderTextColor="#999999" />
        <MaterialCommunityIcons style={styles.formIcon} name="file-document-box-outline" size={24} color="#999999" />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999999" secureTextEntry={true} />
        <MaterialIcons style={styles.formIcon} name="lock" size={24} color="#999999" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <View style={styles.form}>
        <TouchableOpacity style={styles.submitButtom} onPress={() => {}}>
          <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1.1, 1.9]} end={[0.2 , 1.1]} style={styles.submit} >
            <Text style={styles.submitText}>Entrar</Text>
          </LinearGradient >
        </TouchableOpacity>
        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Não tem conta? <Text style={styles.link}>Cadastre-se</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}