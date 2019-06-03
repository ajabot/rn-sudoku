import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'

let tileBackgroundColor

const SelectedTile = (props) => {
    let content = props.content > 0 ? props.content : '';
    return (
        <TouchableWithoutFeedback onPress={props.clickEvent.bind(null, null, props.xIndex, props.yIndex)}>
            <View style={styles.tile}>
                <Text>
                    {content}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    tile: {
        borderWidth: 1,
        flex: 1,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'silver'
    }
});

export default SelectedTile