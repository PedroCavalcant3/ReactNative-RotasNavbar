import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function SuaBiblioteca(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.Titulo}>Só as Máquinas</Text>
      <Button
        title="Koenigsegg Jesko Absolut"
        onPress={() => {
          props.navigation.navigate('Koenigsegg');
        }}
      />
      <Button
        title="Hennessey Venom F5"
        onPress={() => {
          props.navigation.navigate('Hennessey');
        }}
      />

      <Button
        title="Bugatti Bolide"
        onPress={() => {
          props.navigation.navigate('Bugatti');
        }}
      />

      <Button
        title="Bugatti Chiron Super Sport 300+"
        onPress={() => {
          props.navigation.navigate('Bugatti_Chiron');
        }}
      />

      <Button
        title="SSC Tuatara"
        onPress={() => {
          props.navigation.navigate('SSC_Tuatara');
        }}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alingItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#f2f2f2',
  },
  Titulo: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 40,
  },
});
