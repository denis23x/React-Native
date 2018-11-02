import React, {Component} from 'react'
import { StackNavigator } from 'react-navigation'
import NavigationService from './navigationService'

import LoginScreen from '../views/login'
import HomeScreen from '../views/home'
import UiPdfViewer from '../components/ui-pdf-viewer'

const TopLevelNavigator = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    PdfViewer: {
      screen: UiPdfViewer,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export default class Navigator extends React.Component {
  render() {
    return (
      <TopLevelNavigator ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef)}}/>
    );
  }
}
