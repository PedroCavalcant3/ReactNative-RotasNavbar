import * as React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Button,
  Text,
} from 'react-native';

export default function Buscar(props) {
  
  return (
    <View style={estilo.container}>
      <ScrollView style={{ flex: 1 }}>
        <TextInput style={estilo.input1} />

        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/koenigsegg_jesko.jpg')}
          />
        </View>
        <View>
          <Text style={estilo.textos}>
            1# Koenigsegg Jesko Absolut
          </Text>
        </View>
        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/Venom_F5.jpg')}
          />
        </View>
        <View>
          <Text style={estilo.textos}>
            2# Hennessey Venom F5
          </Text>
        </View>
        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/bugatti_bolide.jpg')}
          />
        </View>
        <View>
          <Text style={estilo.textos}>
            3# Bugatti Bolide
          </Text>
        </View>
        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/bugatti-chiron.jpg')}
          />
        </View>
        <View>
          <Text style={estilo.textos}>
            4# Bugatti Chiron Super Sport 300+
          </Text>
        </View>
        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/Tuatara.jpg')}
          />
        </View>
        <View>
          <Text style={estilo.textos}>
            5# SSC Tuatara
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alingItems: 'center',
    padding: 0,
    backgroundColor: '#628395',
  },
  input1: {
    backgroundColor: '#FFFAFA',
    margin: 30,
    borderRadius: 100,
    fontSize: 25,
    textAlign:'center',
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
    paddingBottom: 15,
    paddingLeft: 15,
  }
});
