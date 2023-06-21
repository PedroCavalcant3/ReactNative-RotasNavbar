import * as React from 'react';

import { Text, View, StyleSheet, Image, Dimensions, TextInput, ScrollView, Button} from 'react-native';

export default function Buscar(props) {
  return (
    <View style={estilo.container}>
      <ScrollView style={{ flex: 1 }}>

        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/Hennessey2.jpeg')}
          />
        </View>
        <View>
          <Text style={estilo.textos2}>
            Hennessey Venom F5
          </Text>
        </View>
        <View>
          <Text style={estilo.textos3}>
            Velocidade máxima: 499 km/h
          </Text>
          <Text style={estilo.textos3}>
            Aceleração de 0 a 100 km/h: 2,4 segundos
            </Text>
          <Text style={estilo.textos3}>
            Potência: 1.842 cv
            </Text>
          <Text style={estilo.textos3}>
            Torque: 164,9 kgfm
            </Text>
          <Text style={estilo.textos3}>
            Preço (em dólares): US$ 1,8 Milhão
            </Text>
        </View>
        <View>
          <Text style={estilo.textos}>
            As altas velocidades não são domínio exclusivo das marcas europeias. Os americanos da Hennessey Performance Engineering também sabem algo sobre isso. Enquanto o antigo Venom GT chegava a até 428 km/h, a Hennessey afirma que o próximo Venom F5 passará de 499 km/h, graças a um V8 6.6 biturbo duplo que produz 1.842 cv e 164,9 kgfm de torque. Enquanto o preço é inferior ao de alguns de seus rivais europeus, começando em US$ 1,8 milhões (R$ 8,4 milhões), a Hennessey está planejando construir apenas 24 exemplares.
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