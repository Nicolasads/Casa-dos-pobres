import React, { useState, useContext } from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from 'react-native'

import AuthContext from '../src/contexts/authContext'
// import { Container } from './styles';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Payment from './pages/Payment';
import Finished from './pages/Login';
import Forgot from './pages/Forgot';
import Schedule from './pages/Schedule';
import Financial from './pages/Financial';
import Food from './pages/Food';

const AppStack = createStackNavigator();

export default () =>  {
    const { logged, setLogged, setJwt} = useContext(AuthContext)
    
  
    const getData = async () => {
      try {
        const token = await AsyncStorage.getItem('@CasaDosPobres:userToken') //pegando o tokendo do banco do celular
        
        if(token) {
          setLogged(true)
          setJwt(token)
        }
      } catch (e) {
        alert(e)
      }
    }
    getData()
    
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Login}>
                {logged ? (
                    <>                   
                        <AppStack.Screen name="Home" component={Home} />
                        <AppStack.Screen name="Donate" component={Donate} />
                        <AppStack.Screen name="Payment" component={Payment} />
                        <AppStack.Screen name="Finished" component={Finished} />
                        <AppStack.Screen name="Forgot" component={Forgot} />
                        <AppStack.Screen name="Schedule" component={Schedule} />
                        <AppStack.Screen name="Financial" component={Financial} />
                        <AppStack.Screen name="Food" component={Food} />
                    </>
                ) :
                    <>
                        <AppStack.Screen name="Login" component={Login} />
                        <AppStack.Screen name="Register" component={Register} />
                    </>
                }
            </AppStack.Navigator>
        </NavigationContainer>
    );
}