import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import Grid from './components/grid/Grid'
import GridCompletedModal from './components/grid/GridCompletedModal'
import NumbersPanel from './components/controls/NumbersPanel'
import store from './store/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1}}>
          <GridCompletedModal />
          <View style={{ flex: 1}}></View>
          <Grid/>
          <NumbersPanel/>
        </View>
      </Provider>
    );
  }
}
