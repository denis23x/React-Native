import React from 'react'
import {StyleSheet, View, Dimensions} from 'react-native'
import Pdf from 'react-native-pdf'

export default class UiPdfViewer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state} = navigation
    return {
      title: `${state.params.title}`,
      headerTitleStyle: { color: '#293445', fontWeight: '200' },
    }
  }
  render() {
    const { params } = this.props.navigation.state
    const uri = params ? params.uri : null
    const title = params ? params.title : null

    return (<View style={styles.container}>
      <Pdf style={styles.pdf} source={{
        uri: uri,
        cache: true
      }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pdf: {
      flex: 1,
      width:Dimensions.get('window').width
  }
})
