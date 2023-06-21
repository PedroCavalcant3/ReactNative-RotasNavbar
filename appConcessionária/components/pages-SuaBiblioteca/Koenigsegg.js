import * as React from 'react';

import { Text, View, StyleSheet, Image, Dimensions, TextInput, ScrollView, Button} from 'react-native';

export default function Buscar(props) {
  return (
    <View style={estilo.container}>
      <ScrollView style={{ flex: 1 }}>

        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/koenigsegg2.jpeg')}
          />
        </View>
        <View>
          <Text style={estilo.textos2}>
            Koenigsegg Jesko Absolut
          </Text>
        </View>
        <View>
          <Text style={estilo.textos3}>
            Velocidade máxima: 531 km/h
          </Text>
          <Text style={estilo.textos3}>
            Aceleração de 0 a 100 km/h: Não informado
            </Text>
          <Text style={estilo.textos3}>
            Potência: 1.622 cv
            </Text>
          <Text style={estilo.textos3}>
            Torque: 152,9 kgfm
            </Text>
          <Text style={estilo.textos3}>
            Preço (em dólares): US$ 2,8 Milhões
            </Text>
        </View>
        <View>
          <Text style={estilo.textos}>
            A Koenigsegg sabe uma coisa (ou seis) sobre ir rápido e o Jesko Absolut é o mais recente exemplo. Mas enquanto a maioria dos outros carros desta lista atingiu suas velocidades máximas de fato, os 531 km/h são puramente teóricos, pois nenhuma unidade atingiu o feito de fato, no mundo real.
          </Text>
          <Text style={estilo.textos}>
Com mais de 1.600 cv e 152,9 kgfm de torque a partir de um V8 de 5.0 litros biturbo e uma aerodinâmica aprimorada, o monstro sueco de US$ 2,8 milhões (mais de R$ 13 milhões) tem as credenciais para altas velocidades.
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
