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
          <Text style={styles.headline}>Principal Elemento do Design</Text>
        </View>
        <Text style={styles.conceito}>
          Para que você consiga absorver o melhor de cada etapa do Design
          Thinking, existem ferramentas e metodologias que ajudam a executar
          todo esse processo. Aqui selecionamos algumas das principais:
        </Text>
        <Image
          style={styles.imagem}
          resizeMode={'contain'}
          source={require('../assets/double-diamond-design.png')}
        />
        <Text style={styles.conceito}>
          <Text style={styles.titulo}>
            Quando utilizar o Duplo Diamante? {'\n'}
          </Text>
          Queria te contar também que o Double Diamond é muito mais que apenas
          um guia de um processo de desenvolvimento de uma solução. Você pode
          utilizar essa metodologia do Design para alguns outros fins, como:
          Fazer uma avaliação inicial do projeto e a entender qual é a melhor
          abordagem para enfrentar um desafio específico; Ajudar a alinhar e
          concentrar as equipes no início de um projeto; Começar a moldar a
          estratégia e gestão de um projeto; Acompanhar um projeto em termos de
          ‘onde estamos no processo’ e ‘quais são os próximos passos’; Deixar as
          pessoas mais confortáveis para “ir mais longe e sem foco” em ambas as
          fases divergentes de descoberta e desenvolvimento; Moldar o processo
          de pesquisa (por exemplo, o relatório de pesquisa de 2007 do Design
          Council “11 Lessons on Managing Design” foi estruturado em torno do
          DD).
          <Text style={styles.titulo}>
            {'\n'} {'\n'} Duplo Diamante e Design Thinking: qual a relação?{' '}
            {'\n'}
          </Text>
          O Design Thinking é toda uma abordagem focada em resolver problemas de
          usuários pensando nas melhores práticas de UX (User Experience).
          Dentro disso, o Double Diamond é uma ferramenta prática que
          tangibiliza essa perspectiva, estruturando um processo com elementos e
          etapas muito claros. Em outras palavras, o Double Diamond é um
          processo de design, pensado para obter os melhores resultados em UX.
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
    marginBottom: 40,
    color: '#ffffff',
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
  },
});
