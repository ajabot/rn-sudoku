import React, { Component } from 'react'
import { StyleSheet, Button} from 'react-native'

let tileBackgroundColor

const NumberButton = (props) => {
    return (
        <Button
            onPress={props.clickEvent.bind(null, null, props.title)}
            title={props.title}
        />
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 25
    }
});

export default NumberButton