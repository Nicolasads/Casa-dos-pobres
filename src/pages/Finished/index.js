import React,{ useContext } from 'react';
import { View, Text, Image } from 'react-native';

import style from './style';
import AuthContext from '../../contexts/authContext'

export default function Payment(){
  const { user } = useContext(AuthContext)
  return(
    <View style={style.container}>

        <Image source={require('../../assets/logo-vertical.png')} style={style.logo} />

        <Text style={style.obrigado}>Obrigado</Text>
  <Text style={style.obrigado}>{user}</Text>

        <Image source={require('../../assets/ok.png')} style={style.ok} />

        <Text style={style.sucesso} >Sua doação foi finalizada</Text>
        <Text style={[style.sucesso, {marginBottom: 40}]}>com sucesso!</Text>
    </View>
  );
}