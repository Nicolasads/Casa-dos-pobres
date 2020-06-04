import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

import styles from './style';

// ...
export default function Payment(){
  const navigation = useNavigation();

  function backButton(){
    navigation.goBack();
  }

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={backButton} style={styles.buttom}>
            <SimpleLineIcons name="arrow-left" size={24} color="green"/> 
          </TouchableOpacity>

       </View>
         <WebView source={{ uri: 'https://pag.ae/7W3ViuXYR' }} style={{marginTop: 60}} javaScriptEnabled={true} />
      </View>
    );
}