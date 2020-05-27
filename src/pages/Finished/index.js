import React from 'react';
import { View, Text, Image } from 'react-native';

import style from './style';

export default function Payment(){
  return(
    <View style={style.container}>

        <Image source={require('../../assets/logo-vertical.png')} style={style.logo} />

        <Text style={style.obrigado}>Obrigado</Text>
        <Text style={style.obrigado}>José Francisco da Silva</Text>

        <Image source={require('../../assets/ok.png')} style={style.ok} />

        <Text style={style.sucesso} >Sua doação foi finalizada</Text>
        <Text style={[style.sucesso, {marginBottom: 40}]}>com sucesso!</Text>
    </View>
  );
}