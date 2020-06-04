import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import style from './style';

export default function Donate(){

  const navigation = useNavigation();

  function goFinancial(){
    navigation.navigate('Financial');
  }
  
  function goFood(){
    navigation.navigate('Food');
  }

  function gotSchedule(){
    navigation.navigate('Schedule');
  }

  function goBack(){
    navigation.goBack('Home');
  }

  return(
    <View style={style.container}>

        <View style={style.header}>
          <TouchableOpacity style={style.backButtom} onPress={goBack}>
              <MaterialIcons name="keyboard-arrow-left" size={50} color="#629648" />
          </TouchableOpacity>

          <Image source={require('../../assets/logo-vertical.png')} style={style.logo} />
        </View>

        <Text style={style.textoTopo}>Arraste para o lado e selecione</Text>
        <Text style={style.textoTopo}> o tipo de agendamento</Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>

          <View style={[style.optionView, {marginLeft: 20}]}>
              <Image source={require('../../assets/alimenticia.png')} style={style.alimenticia}/>

              <Text style={style.title}>Alimentícia</Text>
              <Text style={style.description}>Fique a vontade para doar alimentos diversos
              de sua preferência.
              </Text>
                    
              <Text style={style.description}>E nós buscamos onde você estiver!</Text>
              <View style={style.proceed}>
                <TouchableOpacity onPress={goFood}>
                  <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1, 1.5]} end={[0.1 , 1.3]} style={style.buttom} >
                      <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
                    </LinearGradient>
               </TouchableOpacity>
              </View>
            </View>

            <View style={[style.optionView, {marginLeft: 8, marginRight: 18}]}>
              <Image source={require('../../assets/financeira.png')} style={style.financeira}/>

              <Text style={style.title}>Financeira</Text>
              <Text style={style.description}>Doe a quantia que desejar, aquela que não lhe fará
              falta.
              </Text>
                    
              <Text style={style.description}>E nós buscamos onde você estiver!</Text>
              <View style={style.proceed}>
                <TouchableOpacity onPress={goFinancial}>
                  <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1, 1.5]} end={[0.1 , 1.3]} style={style.buttom} >
                      <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
                    </LinearGradient>
               </TouchableOpacity>
              </View>
            </View>

            <View style={[style.optionView, {marginRight: 20}]}>
              <Image source={require('../../assets/outros-2.png')} style={style.others}/>

              <Text style={style.title}>Outros</Text>
              <Text style={style.description}>Fique a vontade para doar diversos
                tipos de produtos ou materiais de sua escolha.
              </Text>
                    
              <Text style={style.description}>E nós buscamos onde você estiver!</Text>
              <View style={style.proceed}>
                <TouchableOpacity onPress={gotSchedule}>
                  <LinearGradient colors={['#81bd3c', '#629648', '#106b34']} start={[1, 1.5]} end={[0.1 , 1.3]} style={style.buttom} >
                      <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
                    </LinearGradient>
               </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
    </View>
  );
}