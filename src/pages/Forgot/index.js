import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import {  useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import styles from './style';

export default function Login() {
  const navigation = useNavigation();

  return(
    <View>
    <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <SimpleLineIcons name="arrow-left" size={24} color="#629648" />
        </TouchableOpacity>
    </View>
    <View style={styles.container}>
        <Text style={styles.header}>Esqueci minha senha</Text>
        <Text style={styles.description}>Informe abaixo o seu Email</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999999" />
        <MaterialCommunityIcons style={styles.formIcon} name="email" size={24} color="#999999" />
      </View>
      <View style={styles.form}>
        <TouchableOpacity style={styles.submitButtom} onPress={() => {}}>
          <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1.1, 1.9]} end={[0.2 , 1.1]} style={styles.submit} >
            <Text style={styles.submitText}>Enviar</Text>
          </LinearGradient >
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}