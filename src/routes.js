import React from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { Container } from './styles';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Payment from './pages/Payment';
import Finished from './pages/Login';
import Forgot from './pages/Forgot';

const AppStack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}} initialRouteName={Login}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Donate" component={Donate} />
                <AppStack.Screen name="Payment" component={Payment} />
                <AppStack.Screen name="Finished" component={Finished} />
                <AppStack.Screen name="Forgot" component={Forgot} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}