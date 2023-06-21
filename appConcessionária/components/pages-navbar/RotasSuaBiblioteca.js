import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Koenigsegg  from '../pages-SuaBiblioteca/Koenigsegg';
import Hennessey from '../pages-SuaBiblioteca/Hennessey';
import Bugatti from '../pages-SuaBiblioteca/Bugatti';
import SSC_Tuatara from '../pages-SuaBiblioteca/SSC_Tuatara';
import Bugatti_Chiron from '../pages-SuaBiblioteca/Bugatti_Chiron';
import SuaBiblioteca from './SuaBiblioteca';

const Stack = createStackNavigator();

export default function RotasSuaBiblioteca(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SuaBiblioteca" component={SuaBiblioteca}/>
      <Stack.Screen name="Bugatti" component={Bugatti}/>
      <Stack.Screen name="Hennessey" component={Hennessey}/>
      <Stack.Screen name="Koenigsegg" component={Koenigsegg}/>
      <Stack.Screen name="Bugatti_Chiron" component={Bugatti_Chiron}/>
      <Stack.Screen name="SSC_Tuatara" component={SSC_Tuatara}/>
    </Stack.Navigator>
  );
}