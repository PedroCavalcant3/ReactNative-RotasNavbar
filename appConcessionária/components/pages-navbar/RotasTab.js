import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import RotasBuscar from './RotasBuscar';
import Inicio from './Inicio';
import RotasSuaBiblioteca from './RotasSuaBiblioteca';

const Tab = createBottomTabNavigator();

export default function RotasTab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Tab.Screen
        name="Carros"
        component={RotasBuscar}
options = {{
tabBarIcon:({color,size})=><MaterialCommunityIcons name="car-convertible" size={size} color={color}/>
          }}
         />

        <Tab.Screen 
        name="Inicio"
        component={Inicio}
options = {{
tabBarIcon:({color,size})=><MaterialCommunityIcons name="home-circle-outline" color={color} size={size}/>
          }}
         />

        <Tab.Screen
         name="Biblioteca"
          component={
            RotasSuaBiblioteca}
options = {{
tabBarIcon:({color,size})=><MaterialCommunityIcons name="book-multiple" color={color} size={size}/>
          }}          
          />
    </Tab.Navigator>
  );
}