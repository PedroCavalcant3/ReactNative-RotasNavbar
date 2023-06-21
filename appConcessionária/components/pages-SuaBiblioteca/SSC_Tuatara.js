import * as React from 'react';

import { Text, View, StyleSheet, Image, Dimensions, TextInput, ScrollView, Button} from 'react-native';

export default function Buscar(props) {
  return (
    <View style={estilo.container}>
      <ScrollView style={{ flex: 1 }}>

        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/Tuatara2.jpg')}
          />
        </View>
        <View>
          <Text style={estilo.textos2}>
            SSC Tuatara
          </Text>
        </View>
        <View>
          <Text style={estilo.textos3}>
            Velocidade máxima: 455,3 km/h
          </Text>
          <Text style={estilo.textos3}>
            Aceleração de 0 a 100 km/h: 2,5 segundos</Text>
          <Text style={estilo.textos3}>
            Potência: 1.774 cv</Text>
          <Text style={estilo.textos3}>
            Torque: 177 kgfm</Text>
          <Text style={estilo.textos3}>
            Preço (em dólares): US$ 1,9 Milhão</Text>
        </View>
        <View>
          <Text style={estilo.textos}>
            SSC Tuatara é um superesportivo projetado, desenvolvido e fabricado pela fabricante de automóveis americana   SSC North America (anteriormente Shelby Super Cars Inc.). O carro é o sucessor do Ultimate Aero e é o resultado de uma colaboração de design entre Jason Castriota e SSC. Inicialmente alimentado por um motor V8 biturbo de 6,9 ​​litros, a capacidade do motor foi posteriormente reduzida para 5,9 L para permitir que o motor tivesse uma linha vermelha mais alta de 8 800 rpm.[2] A SSC afirmou que a potência seria avaliada em 1 350 cv (1 000 kW) ou 1 750 cv (1 300 kW) com combustível E85, juntamente com uma velocidade máxima de 483 km/h.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const largura = Dimensions.get('screen').width

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alingItems: 'center',
    padding: 0,
    backgroundColor: '#CCDBDC',
  },
  item: {
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15,
    paddingLeft: 15,
    paddingRight: 15,
    width: 359,
    height: 200,
  },
  colunas: {
    flexDirection: 'row',
    minwidth: 100,
    borderRadius: 100,
    minheight: 100,
  },
  textos: {
    fontSize:20,
    padding: 20,
  },
  textos2: {
    padding: 15,
    fontSize: 30,
    fontWeight: 'bolder'
  },
  textos3: {
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 20
  }
});
