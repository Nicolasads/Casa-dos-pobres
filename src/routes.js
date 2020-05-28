import React, { useContext } from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from 'react-native'
import api from './services/api'

import AuthContext from '../src/contexts/authContext'
// import { Container } from './styles';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Payment from './pages/Payment';
import Finished from './pages/Finished';
import Forgot from './pages/Forgot';
import Schedule from './pages/Schedule';
import Financial from './pages/Financial';
import Food from './pages/Food';
import Info from './pages/Info';

const AppStack = createStackNavigator();

export default () =>  {
    const { logged, setLogged, setJwt, deleteJwt} = useContext(AuthContext)
    
  
    const getData = async () => {
      try {
        const token = await AsyncStorage.getItem('@CasaDosPobres:userToken') //pegando o tokendo do banco do celular
        
        if(token) {
          api.defaults.headers['x-api-key'] = token
          setJwt(token)
          setLogged(true)
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
                        <AppStack.Screen name="Info" component={Info} />
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