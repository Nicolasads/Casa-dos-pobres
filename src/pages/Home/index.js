import React, { useContext } from 'react';
import { View, Image, Text, ScrollView, StatusBar } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './style';
import AuthContext from '../../contexts/authContext'


export default function Home() {
  const navigation = useNavigation();
  const { deleteJwt } = useContext(AuthContext)

  function goDonate(){ //vai para tela de registro de doação
    navigation.navigate('Donate');
  }

  function goPayment() {
    navigation.navigate('Payment');
  }

  function goInfo() {
    navigation.navigate('Info');
  }

  return(
    <ScrollView>

    <View style={styles.container}>
    <StatusBar barStyle="light-content"/>
      <View style={styles.header}>
        <Image source={require('../../assets/logo-vertical.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => deleteJwt()} style={styles.logout}>
          <MaterialCommunityIcons name="logout" size={28} color="#106b34" />
        </TouchableOpacity>
      </View>
     
      
      <View style={styles.optionView}>
          <Image source={require('../../assets/dinehiro.png')} style={styles.money}/>
          <Text style={styles.title}>Em Dinheiro</Text>
          <Text style={styles.description}>Faça sua doação em dinheiro em <Text style={styles.bold}>Cartões
            de crédito débito online, boleto bancário,
            depósito em conta e transferência
            de saldo entre contas PagSeguro.
            </Text> 
          </Text>
        <View style={styles.proceed}>
          <TouchableOpacity onPress={goPayment}>
            <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1, 1.5]} end={[0.1 , 1.3]} style={styles.buttom} >
              <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.optionView}>
          <Image source={require('../../assets/outros.png')} style={styles.others}/>

          <Text style={styles.title}>Agendamento</Text>
          <Text style={styles.description}>Doe diversos tipos de produtos higiene,
            roupas, móveis, alimentos entre outros.
          </Text>
          
          <Text style={styles.description}>Ou entregue sua
            contribuição financeira em mãos.</Text>
          <View style={styles.proceed}>
            <TouchableOpacity onPress={goDonate}>
              <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1, 1.5]} end={[0.1 , 1.3]} style={styles.buttom} >
                <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.showInfo}>
        <Text style={styles.infoText}>Saiba mais sobre a</Text>
        <TouchableOpacity onPress={goInfo}>
          <Text style={styles.buttomInfo}>Casa dos Pobres</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  );
}