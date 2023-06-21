import * as React from 'react';

import { Text, View, StyleSheet, Image, Dimensions, TextInput, ScrollView, Button} from 'react-native';

export default function Buscar(props) {
  return (
    <View style={estilo.container}>
      <ScrollView style={{ flex: 1 }}>

        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/bugatti2.jpeg')}
          />
        </View>
        <View>
          <Text style={estilo.textos2}>
            Bugatti Bolide
          </Text>
        </View>
        <View>
          <Text style={estilo.textos3}>
            Velocidade máxima: 499 km/h
          </Text>
          <Text style={estilo.textos3}>
            Aceleração de 0 a 100 km/h: 2,17 segundos
            </Text>
          <Text style={estilo.textos3}>
            Potência: 1.825 cv
            </Text>
          <Text style={estilo.textos3}>
            Torque: 188,7 kgfm
            </Text>
          <Text style={estilo.textos3}>
            Preço (em dólares): US$ 4,7 Milhões
            </Text>
        </View>
        <View>
          <Text style={estilo.textos}>
            O Bugatti Bolide de pista é a criação mais selvagem já já apresentada pelos franceses, o que certamente significa algo. Baseado na plataforma Chiron, o Bolide pega o motor W16 de 8.0 litros quadriturbo usando combustível de 110 octanas de corrida, ajudando a elevar o rendimento para 1.825 cv e 188,7 kgfm de torque em comparação com o Chiron Super Sport 300+.
            </Text>
            <Text style={estilo.textos}>
A velocidade máxima passa de 499 km/h. Para entrar no clube ultra exclusivo de proprietários do Bolide, foi necessário desembolsar US$ 4,7 milhões (R$ 21,9 milhões), mas a Bugatti confirmou que o modelo estava esgotado já no início de 2022.
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