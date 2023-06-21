import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Buscar from './Buscar';

const Stack = createStackNavigator();

export default function RotasBuscar(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Buscar" component={Buscar}/>
    </Stack.Navigator>
  );
}