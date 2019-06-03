import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './components/grid/Grid'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 1}}></View>
        <Grid/>
        <View style={{ flex: 1}}></View>
      </View>
    );
  }
}
