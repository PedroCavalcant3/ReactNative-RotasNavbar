import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import Principios from './Principios';
import Ferramentas from './Ferramentas';
import Design from './Design';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar() {
  return (
    <Tab.Navigator initialRouteName="Principios" screenOptions={{headerShown:false}}  >
      <Tab.Screen
        name="Princípios"
        component={Principios}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-graduate" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Ferramentas"
        component={Ferramentas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-tie" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Design"
        component={Design}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-ninja" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}