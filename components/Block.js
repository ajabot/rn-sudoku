import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Tile from './Tile'

export default class Block extends React.Component {
    renderTiles(rowIndex) {
        const xIndex = this.props.xIndex * 3
        const yIndex = this.props.yIndex * 3 + rowIndex
        let blockIndex = rowIndex * 3
        let tiles = [];

        for (i = xIndex; i < (xIndex + 3); i++) {
            tiles.push(<Tile
                key={i}
                xIndex={i}
                yIndex={yIndex}
                content={this.props.numbers[blockIndex]}
                clickEvent={this.props.clickEvent}
                isHighlighted={this.props.highlightedRow == i || this.props.highlightedColumn == yIndex}
            />)
            blockIndex++
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