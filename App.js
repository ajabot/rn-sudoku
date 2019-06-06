import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Grid from './components/grid/Grid'
import NumbersPanel from './components/controls/NumbersPanel'
import store from './store/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1}}>
          <View style={{ flex: 1}}></View>
          <Grid/>
          <NumbersPanel/>
        </View>
      </Provider>
    );
  }
}
