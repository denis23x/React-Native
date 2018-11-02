import React, {Component} from 'react'
import { View } from 'react-native';
import Navigation from './js/navigation'

export default class App extends React.Component {
  render() {
    return (<View style={{flex: 1}}>
      <Navigation/>
    </View>)
  }
}
