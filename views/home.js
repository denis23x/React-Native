import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import NavigationService from '../js/navigationService'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  onPress = () => {

  };
  render() {
    return (<View style={styles.container}>
        <Text style={styles.ourService}>Наши услуги</Text>
        <View style={styles.containerBlocks}>
          <TouchableHighlight
            style={styles.purpleBlock}
            onPress={this.onPress}
            underlayColor='#a75dbb'>
            <Text style={{textAlign: 'center', color: '#fff'}}>Кредитный рейтинг</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.blueBlock}
            onPress={this.onPress}
            underlayColor='#4192be'>
            <Text style={{textAlign: 'center', color: '#fff'}}>Отчет {'\n'} FICO</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.greenBlock}
            onPress={this.onPress}
            underlayColor='#88be41'>
            <Text style={{textAlign: 'center', color: '#fff'}}>Рейтинг финансового здоровья</Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.lorem}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <Text style={styles.link} onPress={() => NavigationService.navigate('PdfViewer', {
              title: 'Договор оферты',
              uri: 'http://unicom24.ru/media_files/register_offer/download/',
            })}> договор оферты </Text>
          esse cillum dolore eu fugiat nulla pariatur.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20
  },
  ourService: {
    fontSize: 18,
    color: '#293445',
    marginTop: 30,
    fontFamily: 'sans-serif-light'
  },
  containerBlocks: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  purpleBlock: {
    width: 100,
    height: 100,
    backgroundColor: '#b678c7',
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 20
  },
  blueBlock: {
    width: 100,
    height: 100,
    backgroundColor: '#5aa1c7',
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 20
  },
  greenBlock: {
    width: 200,
    height: 100,
    backgroundColor: '#98c75a',
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 20
  },
  lorem: {
    fontSize: 10,
    marginTop: 10,
    fontFamily: 'sans-serif-light'
  },
  link: {
    color: '#5aa1c7',
  }
});
