import * as React from 'react';

import { Text, View, StyleSheet, Image, Dimensions, TextInput, ScrollView, Button} from 'react-native';

export default function Buscar(props) {
  return (
    <View style={estilo.container}>
      <ScrollView style={{ flex: 1 }}>

        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/bugatti3.jpg')}
          />
        </View>
        <View>
          <Text style={estilo.textos2}>
            Bugatti Chiron Super Sport 300+
          </Text>
        </View>
        <View>
          <Text style={estilo.textos3}>
            Velocidade máxima: 483 km/h
          </Text>
          <Text style={estilo.textos3}>
            Aceleração de 0 a 100 km/h: 2,3 segundos
            </Text>
          <Text style={estilo.textos3}>
            Potência: 1.622 cv
            </Text>
          <Text style={estilo.textos3}>
            Torque: 163,1 kgfm
            </Text>
          <Text style={estilo.textos3}>
            Preço (em dólares): US$ 3,9 Milhões
            </Text>
        </View>
        <View>
          <Text style={estilo.textos}>
            A Bugatti está continuamente encontrando maneiras de retirar cada vez mais desempenho de um motor em particular. Seu W16 8.0 litros com 4 turbos nos chocou no Veyron e no Veyron Super Sport - dois carros que, se ainda estivessem em produção, entrariam nesta lista com facilidade - mas este motor monstruoso está em um nível totalmente diferente no mais novo Chiron Super Sport 300+. Com 1.622 cv e 163,1 kgfm, atinge 100 km/h em 2,3 segundos e, como o nome sugere, pode atingir 483 km/h (300 mi/h).
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