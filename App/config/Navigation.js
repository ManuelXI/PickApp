import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Aftersplash from '../screens/Aftersplash';
import Choice from '../screens/Choice';
import Login from '../screens/Login';
import SignInCustomer from '../screens/SignInCustomer';
import SignUpCustomer from '../screens/SignUpCustomer';
import HomeCustomer from '../screens/Customer/HomeCustomer';
import DesignStuff from '../screens/Customer/DesignStuff';
import Recyclable from '../screens/Customer/TopNav Screens/Recyclable';
import SolidWaste from '../screens/Customer/TopNav Screens/SolidWaste';

const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator
    
   headerMode="none"
        initialRouteName="HomeCustomer"
        // initialRouteName="DesignStuff"
        // initialRouteName="Recyclable"
        // initialRouteName="SolidWaste"
    >
    <MainStack.Screen name="Aftersplash" component={Aftersplash} options={{headerShown: false}} />
    <MainStack.Screen name='Choice' component={Choice} />
    <MainStack.Screen name='Login' component={Login} />
    <MainStack.Screen name='SignInCustomer' component={SignInCustomer} />
    <MainStack.Screen name='HomeCustomer' component={HomeCustomer} />
    <MainStack.Screen name='SignUpCustomer' component={SignUpCustomer} />
    <MainStack.Screen name='DesignStuff' component={DesignStuff} />
    <MainStack.Screen name='Recyclable' component={Recyclable} />
    <MainStack.Screen name='SolidWaste' component={SolidWaste} />
  </MainStack.Navigator>
);

const DrawerScreen = () => (
  
  <Drawer.Navigator>
    <Drawer.Screen name="Recyclable" component={Recyclable} />
  </Drawer.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
    {/* <DrawerScreen/> */}
  </NavigationContainer>
);

// ex