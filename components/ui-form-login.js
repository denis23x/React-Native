import React from 'react'
import t from 'tcomb-form-native'
import _ from 'lodash'
import {StyleSheet, View, Text, TouchableHighlight, Alert, Image} from 'react-native'
import NavigationService from '../js/navigationService'

const Form = t.form.Form;

// Redefine validation rules
const email = t.refinement(t.String, (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
email.getValidationErrorMessage = (v) => v === null ? 'Поле обязательно для заполнения' : 'Введите корректный адрес'

const password = t.refinement(t.String, (v) => v.length >= 4)
password.getValidationErrorMessage = (v) => v === null ? 'Поле обязательно для заполнения' : 'Минимум 4 символа'

// Declare form fields
const user = t.struct({
  email: email,
  password: password,
});

// Redefine input styles
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.textboxView.normal = {
  marginBottom: 5
}
stylesheet.textboxView.error = {
  marginBottom: 5
}

stylesheet.textbox.normal = {
  color: '#293445',
  fontSize: 12,
  borderRadius: 4,
  borderColor: '#cad0d9',
  borderWidth: 1,
  paddingTop: 18,
  paddingLeft: 8,
  paddingBottom: 4,
  fontFamily: 'sans-serif-light'
}
stylesheet.textbox.error = {
  color: '#293445',
  fontSize: 12,
  borderRadius: 4,
  borderColor: '#c75a6d',
  borderWidth: 1,
  paddingTop: 18,
  paddingLeft: 8,
  paddingBottom: 4,
  fontFamily: 'sans-serif-light'
}

stylesheet.controlLabel.normal = {
  color: '#828fa1',
  fontSize: 12,
  marginBottom: -20,
  marginLeft: 8,
  fontFamily: 'sans-serif-light'
}
stylesheet.controlLabel.error = {
  color: '#c75a6d',
  fontSize: 12,
  marginBottom: -20,
  marginLeft: 8,
  fontFamily: 'sans-serif-light'
}

stylesheet.errorBlock = {
  color: '#c75a6d',
  fontSize: 12,
  paddingTop: 0,
  marginTop: -4,
  marginLeft: 8,
  fontFamily: 'sans-serif-light'
}

// Ui-form-login styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  textWelcome: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,
    marginBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'sans-serif-light'
  },
  logotype: {
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#293445',
    fontFamily: 'sans-serif-light'
  },
  button: {
    backgroundColor: '#ffd400',
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default class UiFormLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {
        email: '',
        password: ''
      },
      options: {
        stylesheet: stylesheet,
        fields: {
          email: {
            label: 'Почта',
            stylesheet: _.cloneDeep(stylesheet),
            onFocus: () => this.changeBorderColor('email', true),
            onBlur: () => this.changeBorderColor('email', false),
            keyboardType: 'email-address'
          },
          password: {
            label: 'Пароль',
            stylesheet: _.cloneDeep(stylesheet),
            onFocus: () => this.changeBorderColor('password', true),
            onBlur: () => this.changeBorderColor('password', false),
            secureTextEntry: true
          },
        },
      }
    }
  }
  changeBorderColor = (name, focused) => {
    const copyOptions = _.cloneDeep(this.state.options)
    copyOptions.fields[name].stylesheet.textbox.normal.borderColor = focused ? '#fdd400' : '#cad0d9'
    this.setState({
      options: copyOptions
    });
  }
  onPress = () => {
    const value = this._form.getValue();
    if (value) { // Validation
      // Alert.alert('value: ', JSON.stringify(value))
      NavigationService.navigate('Home');
    }
  }
  render() {
    return (<View style={styles.container}>
      <Image
        style={styles.logotype}
        resizeMode='center'
        source={require('../assets/images/logotype.png')}
      />
      <Text
        style={styles.textWelcome}>Для входа введите данные своей учетной записи</Text>
      <Form
        ref={c => this._form = c}
        type={user}
        value={this.state.values}
        options={this.state.options}
        onChange={(values) => this.setState({values:values})}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={this.onPress}
        underlayColor='#eeba00'>
        <Text
        style={styles.buttonText}>Войти</Text>
      </TouchableHighlight>
    </View>)
  }
}
