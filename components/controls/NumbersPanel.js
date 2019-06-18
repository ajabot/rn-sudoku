import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import NumberButton from './NumberButton'

const NumbersPanel = (props) => {
    return (
        <View style={styles.panel}>
            <NumberButton value={1}/>
            <NumberButton value={2}/>
            <NumberButton value={3}/>
            <NumberButton value={4}/>
            <NumberButton value={5}/>
            <NumberButton value={6}/>
            <NumberButton value={7}/>
            <NumberButton value={8}/>
            <NumberButton value={9}/>
        </View>
    );
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default NumbersPanel;