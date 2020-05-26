import React, { useState } from 'react';
import { View, Image, Text, ScrollView, StatusBar } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
<<<<<<< HEAD

  const navigation = useNavigation();

  function goSchedule(){ //vai para tela de registro de doação
    navigation.navigate('Schedule');
  }

  return(
    <ScrollView showsVerticalScrollIndicator={false} /* remover a barra de rolagem vertical */> 
    <View style={styles.container}>
      <Image source={require('../../assets/logo-vertical.png')} style={styles.logo} />
      <View style={styles.optionView}>
          <Image source={require('../../assets/dinheiro.png')} style={styles.money}/>
=======
  // async function deleteUser() {
  //   try {
  //     await AsyncStorage.setItem('@CasaDosPobres:userToken', null)

  //   } catch (e) {
  //     alert(e)
  //   }
  // }

  return(
    <ScrollView>
      
    <View style={styles.container}>
    <StatusBar barStyle="light-content"/>
      <Image source={require('../../assets/logo-vertical.png')} style={styles.logo} />
      <View style={styles.optionView}>
          <Image source={require('../../assets/dinehiro.png')} style={styles.money}/>
>>>>>>> 4465a3d95a36e99a71df03f8324c113bc7293a50
          <Text style={styles.title}>Em Dinheiro</Text>
          <Text style={styles.description}>Faça sua doação em dinheiro em <Text style={styles.bold}>Cartões
            de crédito débito online, boleto bancário,
            depósito em conta e transferência
            de saldo entre contas PagSeguro.
            </Text> 
          </Text>
        <View style={styles.proceed}>
          <TouchableOpacity onPress={() => {}}>
            <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1, 1.5]} end={[0.1 , 1.3]} style={styles.buttom} >
              <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.optionView}>
          <Image source={require('../../../assets/outros.png')} style={styles.others}/>

          <Text style={styles.title}>Agendamento</Text>
          <Text style={styles.description}>Doe diversos tipos de produtos higiene,
            roupas, móveis, alimentos entre outros.
          </Text>
          
          <Text style={styles.description}>Ou entregue sua
            contribuição financeira em mãos.</Text>
        <View style={styles.proceed}>
          <TouchableOpacity onPress={goSchedule}>
            <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1, 1.5]} end={[0.1 , 1.3]} style={styles.buttom} >
              <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </ScrollView>
  );
}