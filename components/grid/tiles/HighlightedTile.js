import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { selectTile } from "../../../actions/actions";

let tileBackgroundColor

const HighlightedTile = (props) => {
    let content = props.content > 0 ? props.content : '';
    return (
        <TouchableWithoutFeedback onPress={() => { props.selectTile(props.xIndex, props.yIndex) }}>
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
        backgroundColor: 'skyblue'
    }
});

export default connect(null, { selectTile })(HighlightedTile)