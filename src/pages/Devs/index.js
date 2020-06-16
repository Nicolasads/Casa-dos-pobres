import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

export default function Devs() {
  const navigation = useNavigation();
  function back() {
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back} style={styles.back}>
          <MaterialIcons name="keyboard-arrow-left" size={45} color="#629648" />
        </TouchableOpacity>
        <Image
          source={require("../../assets/logo-vertical.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.devs}>
        <View style={styles.frontend}>
          <Text style={styles.title}>Front-End</Text>
          <Text style={styles.name}>Nicolas Alexsander de Azevedo Santana</Text>
          <Text style={styles.name}>Eliel Marques Carvalho</Text>
          <Text style={styles.name}>Josivânio Marinho Souza</Text>
          <Text style={styles.name}>Gustavo de Almeida Gama</Text>
        </View>

        <View style={styles.backend}>
          <Text style={styles.title}>Back-End</Text>
          <Text style={styles.name}>Everton Vilela de Sena Sá</Text>
          <Text style={styles.name}>Israel Italo Bernardo Cabral Silva</Text>
          <Text style={styles.name}>Victor Falcão Albuquerque de Melo</Text>
          <Text style={styles.name}>Fhelipe Silva Freitas</Text>
        </View>

        <View style={styles.document}>
          <Text style={styles.title}>Documentação e testes</Text>
          <Text style={styles.name}>Thamirys Eduarda Vieira de Lima</Text>
          <Text style={styles.name}>Miguel Barbosa da Silva Neto</Text>
          <Text style={styles.name}>Herbert Alves Bezerra</Text>
        </View>

        <View style={styles.document}>
            <Text style={styles.title}>Gerente de Projetos</Text>
            <Text style={styles.name}>José Marcones da Silva Lira</Text>
        </View>
      </View>
    </ScrollView>
  );
}
