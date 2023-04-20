import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Principios() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.headline}>
        <Text style={styles.headline}>
          Design Thinking: o que é, etapas e como aplicar
        </Text>
        </View>
        <Text style={styles.conceito}>
          Design Thinking é uma abordagem, uma forma de pensar que pode te
          ajudar a solucionar problemas complexos. A principal característica
          aqui é que essa abordagem é centrada nas pessoas, ou seja, ela busca 
          envolver personagens com diferentes perspectivas para entender
          profundamente o público-alvo, suas dores, necessidades e
          comportamentos. Consequentemente, as chances de gerar uma solução mais
          criativa, inovadora e eficiente são muito maiores. Nesse caso, o
          pensamento crítico e criativo deve ir muito além da preocupação
          estética do produto. O objetivo é oferecer ao usuário uma solução
          completa e de alto valor.
        </Text>
        <Image
          style={styles.imagem}
          resizeMode={'contain'}
          source={require('../assets/mapa-empatia-design-thinking.png')}
        />
        <Text style={styles.conceito}> Tópicos: </Text>
        <View>
          <Text style={styles.conceito}>
            <AntDesign
              name="doubleright"
              size={24}
              color="black"
              style={styles.icon}
            />
            O que é Design Thinking{' '}
          </Text>
          <Text style={styles.conceito}>
            <AntDesign
              name="doubleright"
              size={24}
              color="black"
              style={styles.icon}
            />
            Principais ferramentas em Design Thinking{' '}
          </Text>
          <Text style={styles.conceito}>
            <AntDesign
              name="doubleright"
              size={24}
              color="black"
              style={styles.icon}
            />
            Formas de aplicar o Design Thinking{' '}
          </Text>
          <Text style={styles.conceito}>
            <AntDesign
              name="doubleright"
              size={24}
              color="black"
              style={styles.icon}
            />
            Importância da abordagem{' '}
          </Text>
          <Text style={styles.conceito}>
            <AntDesign
              name="doubleright"
              size={24}
              color="black"
              style={styles.icon}
            />
            Pilares do Design Thinking{' '}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#483D8B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conceito:{
    fontSize: 18,
    textAlign: 'justify',
    margin: 15,
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 60,
    marginBottom: 30,
    width: 200,
    height: 60,
    margin: 4,
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 14,
  },
  imagem: {
    width: 400,
    height: 180,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
    
  }
});
