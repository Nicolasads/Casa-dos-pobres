import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Feather, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function App(){
    
    const navigation = useNavigation();
    function back() {
        navigation.goBack();
    }

    function goDev() {
      navigation.navigate('Devs');
    }

  return(
   <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>

          <View style={styles.header}>
             <TouchableOpacity style={styles.backButtom} onPress={back}>
                 <MaterialIcons name="keyboard-arrow-left" size={45} color="#629648" />
             </TouchableOpacity>
             <Image source={require('../../assets/logo-vertical.png')} style={styles.logo} />
          </View>
        
        <View style={styles.content}>
          <View style={styles.carousel}>
              <Text style={styles.carouselText}>UMA HISTÓRIA DE DÉCADAS</Text>
              <Image source={require('../../assets/img1.jpg')} style={styles.image} />
              <Text style={styles.description}>Tudo começou em 1946, quando um grupo de maçons, vendo a dificuldade de alguns moradores de rua de Caruaru e cidades circunvizinhas,
              iniciou a distribuição de cestas básicas, sempre às sextas-feiras, nas
              imediações da Rua São Miguel, próximo à rede ferroviária.</Text>
            </View>
            <View style={styles.carousel}>
              <Text style={styles.carouselText}>ELES PRECISAM DA SUA AJUDA</Text>
              <Image source={require('../../assets/img2.jpg')} style={styles.image} />
              <Text style={styles.description}>Os interessados em conceder alguma forma de doação podem usar as
                funcionalidades disponíveis no aplicativo para doar ou procurar o diretor
                da Casa ou algumas das assistências sociais.
                Para mais informações veja os dados abaixo
                </Text>
            </View>
            <View style={styles.carousel}>
              <Text style={styles.carouselText}>PARTICIPE VOCÊ TAMBÉM</Text>
              <Image source={require('../../assets/img3.jpg')} style={styles.image} />
              <Text style={styles.description}>Temos diversas atividades que vão desde uma simples caminhada ou
                uma festa em família, até viagens turisticas, que proporcionam o prazer
                ao idoso, permitindo uma melhoria física e psicológica ao individuo
                </Text>
            </View>
        </View>

        <View style={styles.devBtn}>
          <Text style={styles.devDesc}>Saiba mais sobre os </Text>
          <TouchableOpacity onPress={goDev}>
            <Text style={styles.devInfo}>Desenvolvedores do App</Text>
          </TouchableOpacity>
        </View>
          
          <View style={styles.info}>
            <Text style={styles.title}>MAIS INFORMAÇÕES</Text>

            <View style={styles.information}>
              <View style={styles.left}>
                <View style={styles.headerInfo}>
                  <Fontisto name="map" size={35} color="#629648" style={styles.headerIcon} />
                  <Text style={styles.headerTitle}>Endereço</Text>
                </View>
                <Text style={styles.desc}>
                  Av Lourival José da Silva, 483
                </Text>
                <Text>
                  Bairro Petrópolis
                </Text>
                <Text>
                  CEP 55030-200
                </Text>
                <Text>
                  Caruaru, PE
                </Text>
                <View style={styles.headerInfo}>
                  <Fontisto name="email" size={35} color="#629648" style={styles.headerIcon} />
                  <Text style={styles.headerTitle}>Email</Text>
                </View>
                    <Text style={styles.highlight}>
                      Informações
                    </Text>
                    <Text>
                      contato@casadospobres.com.br
                    </Text>
                    <Text style={styles.highlight}>
                      Doações
                    </Text>
                    <Text>
                      doacoes@casadospobres.com.br
                    </Text>
                    <View style={styles.headerInfo}>
                    <Feather name="users" size={35} color="#629648" style={styles.headerIcon} />
                    <Text style={styles.headerTitle}>Atendimento</Text>
                </View>
                    <Text style={styles.highlight}>
                      Segunda - Sexta-Feira
                    </Text>
                    <Text>
                      8h - 17h
                    </Text>
                    <Text style={styles.highlight}>
                      Sábado
                    </Text>
                    <Text>
                      8h - 13h
                    </Text>
                  <View style={styles.headerInfo}>
                    <MaterialIcons name="phone-in-talk" size={35} color="#629648" style={styles.headerIcon} />
                    <Text style={styles.headerTitle}>Fones</Text>
                </View>
                <Text style={styles.highlightphone}>
                  Fixo
                </Text>
                <Text style={styles.phone}>
                  81 3721 4325
                </Text>
              </View>
              
            </View>
          </View>
      </ScrollView>
   </View>
  );
}