import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './components/grid/Grid'
import NumbersPanel from './components/controls/NumbersPanel'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 1}}></View>
        <Grid/>
        <NumbersPanel/>
      </View>
    );
  }
}
