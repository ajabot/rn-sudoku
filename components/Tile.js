import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'

let tileBackgroundColor

const Tile = (props) => {
    let tileBackgroundColor = props.isHighlighted ? 'skyblue' : '#fff'
    const styles = StyleSheet.create({
        tile: {
            borderWidth: 1,
            flex: 1,
            aspectRatio: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: tileBackgroundColor
        }
    });
    
    return (
        <TouchableWithoutFeedback onPress={props.clickEvent.bind(null, null, props.xIndex, props.yIndex)}>
            <View style={styles.tile}>
                <Text>
                    {props.content}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Tile