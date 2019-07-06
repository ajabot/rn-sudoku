import React, { Component, useMemo } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { selectTile } from "../../actions/actions";

let tileBackgroundColor

const Tile = (props) => {
    let content = props.content > 0 ? props.content : '';
    
    const tileStyle = useMemo(
        () => {
            switch (props.style) {
                case 'selected':
                    return styles.selected
                    break
                case 'highlighted':
                    return styles.highlighted
                    break
                default:
                    return styles.tile
            }
        },
        [props.style]
    );

    return (
        <TouchableWithoutFeedback onPress={() => { props.selectTile(props.xIndex, props.yIndex) }}>
            <View style={tileStyle}>
                <Text style={{color: props.conflicted ? 'red' : 'black'}}>
                    {content}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const commonStyle = {
    borderWidth: 1,
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
}

const styles = StyleSheet.create({
    tile: {
        ...commonStyle,
        backgroundColor: '#fff'
    },
    selected: {
        ...commonStyle,
        backgroundColor: 'silver'
    },
    highlighted: {
        ...commonStyle,
        backgroundColor: 'skyblue'
    },
});

export default connect(null, { selectTile })(Tile)