import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native';
import { UiFormLogin } from '../components/ui-form-login'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (<View style={styles.container}>
        <UiFormLogin/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
