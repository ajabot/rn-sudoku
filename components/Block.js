import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Tile from './Tile'

export default class Block extends React.Component {
    constructor(props) {
        super(props)

        this.numbers = [...props.numbers]
    }

    renderTiles(rowIndex) {
        const xIndex = this.props.xIndex * 3
        const yIndex = this.props.yIndex * 3 + rowIndex

        let tiles = [];
        for (i = xIndex; i < (xIndex + 3); i++) {
            tiles.push(<Tile xIndex={i} yIndex={yIndex} content={i + rowIndex} key={i} clickEvent={this.props.clickEvent}/>)
        }
        return tiles;
    }

    renderRow(rowIndex) {
        return (
            <View style={styles.row}>
                {this.renderTiles(rowIndex)}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.block}>
                {this.renderRow(0)}
                {this.renderRow(1)}
                {this.renderRow(2)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    block: {
        borderWidth: 2,
        flex: 1
    },
    row: {
        flexDirection: 'row'
    }
});