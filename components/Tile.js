import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'

let tileBackgroundColor

const Tile = (props) => {
    let tileBackgroundColor = props.isHighlighted ? 'skyblue' : '#fff'
    const styles = StyleSheet.create({
        tile: {
            borderWidth: 1,
            flexBasis: 33,
            backgroundColor: tileBackgroundColor
        }
    });
    
    return (
        <View style={styles.tile}>
            <TouchableWithoutFeedback onPress={props.clickEvent.bind(null, null, props.xIndex, props.yIndex)}>
                <Text>
                    {props.content}
                </Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Tile