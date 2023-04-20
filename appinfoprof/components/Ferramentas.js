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

export default function Ferramentas() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headline}>
          <Text style={styles.headline}>
            Principais ferramentas em Design Thinking
          </Text>
        </View>
        <Text style={styles.conceito}>
          Para que você consiga absorver o melhor de cada etapa do Design
          Thinking, existem ferramentas e metodologias que ajudam a executar
          todo esse processo. Aqui selecionamos algumas das principais:
        </Text>
        <Image
          style={styles.imagem}
          resizeMode={'contain'}
          source={require('../assets/elementos-design-thinking.png')}
        />
        <Text style={styles.conceito}>
          <Text style={styles.titulo}>Mapa da Empatia {'\n'}</Text>O Mapa da
          Empatia é útil especialmente para a primeira etapa do Design Thinking,
          pois parte da colaboração entre equipes para obter insights sobre as
          necessidades dos clientes. De forma bem visual e aprofundada, a
          proposta é responder a questões como: O que o usuário pensa e sente? O
          que ele escuta, vê, fala e faz? Quais são suas dores? Quais são seus
          desejos?
          <Text style={styles.titulo}>{'\n'} {'\n'} Brainstorming {'\n'}</Text>
          Como já vimos, o brainstorming é uma dinâmica que auxilia na etapa de
          ideação. Para que a colaboração tenha o resultado esperado, é
          importante que todos estejam dispostos a participar sem julgamentos,
          focando em um problema muito bem definido. Algumas boas práticas que
          contribuem para um brainstorming assertivo e produtivo são: Ter uma
          pessoa responsável por coordenar o processo; Proporcionar um reforço
          visual para as ideias propostas (post-its são muito úteis); Organizar
          para que todos tenham um momento de fala (que deve ser respeitado);
          Manter o foco no objetivo e evitar conversas paralelas.
          <Text style={styles.titulo}>
            {' '}
            {'\n'} {'\n'} MVP {'\n'}
          </Text>
          O MVP (Minimum Viable Product) é muito útil para a etapa de
          prototipação e validação das ideias. O objetivo é construir uma versão
          mais simples e enxuta do produto, utilizando o mínimo de recursos
          possíveis mas agregando o valor principal que a solução deve entregar.
          Por isso, é fundamental ter entendimento pleno da proposta de valor
          para colocar esse conceito em prática, assim como definir uma base de
          clientes que poderá validar tudo isso.
        </Text>
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
  conceito: {
    fontSize: 18,
    textAlign: 'justify',
    margin: 30,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom:40,
    color: '#ffffff'
    
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
    margin: 10
   
  },
});
