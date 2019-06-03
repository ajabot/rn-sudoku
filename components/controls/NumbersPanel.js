import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import NumberButton from './NumberButton'
export default class NumbersPanel extends React.Component {
    onButtonClick(e, number) {
        console.log(number)
    }

    render() {
        return (
            <View style={styles.panel}>
                <NumberButton title="1" clickEvent={this.onButtonClick} />
                <NumberButton title="2" clickEvent={this.onButtonClick} />
                <NumberButton title="3" clickEvent={this.onButtonClick} />
                <NumberButton title="4" clickEvent={this.onButtonClick} />
                <NumberButton title="5" clickEvent={this.onButtonClick} />
                <NumberButton title="6" clickEvent={this.onButtonClick} />
                <NumberButton title="7" clickEvent={this.onButtonClick} />
                <NumberButton title="8" clickEvent={this.onButtonClick} />
                <NumberButton title="9" clickEvent={this.onButtonClick} />
            </View>
        );
    }
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
