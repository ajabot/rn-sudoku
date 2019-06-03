import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tile from './Tile'
import Block from './Block'

export default class Grid extends React.Component {
    constructor(props) {
        super(props)

        let lines = [
            [2, 5, 0, 0, 0, 1, 0, 0, 0],
            [0, 7, 9, 0, 9, 0, 5, 0, 0],
            [0, 0, 0, 0, 0, 0, 7, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 7, 0],
            [3, 0, 0, 8, 5, 2, 0, 0, 1],
            [0, 6, 0, 0, 0, 0, 0, 0, 0],
            [9, 0, 6, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 2, 0, 6, 8, 0],
            [0, 0, 0, 9, 0, 0, 0, 3, 5],
        ]

        let columns = [
            [2, 0, 0, 0, 3, 0, 9, 0, 0],
            [5, 7, 0, 0, 0, 6, 0, 0, 0],
            [0, 9, 0, 0, 0, 0, 6, 1, 0],
            [0, 0, 0, 0, 8, 0, 0, 0, 9],
            [0, 9, 0, 0, 5, 0, 0, 2, 0],
            [1, 0, 0, 0, 2, 0, 0, 0, 0],
            [0, 5, 7, 0, 0, 0, 0, 6, 0],
            [0, 0, 0, 7, 0, 0, 0, 8, 3],
            [0, 0, 2, 0, 1, 0, 0, 0, 5],
        ]

        let blocks = [
            [2, 5, 0, 0, 7, 9, 0, 0, 0],
            [0, 0, 1, 0, 9, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 7, 0, 2],
            [0, 0, 0, 3, 0, 0, 0, 6, 0],
            [0, 0, 0, 8, 5, 2, 0, 0, 0],
            [0, 7, 0, 0, 0, 1, 0, 0, 0],
            [9, 0, 6, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 2, 0, 9, 0, 0],
            [0, 0, 0, 9, 6, 8, 0, 3, 5],
        ]

        this.state = {
            highlightedRow: null,
            highlightedColumn: null,
            lines: lines,
            columns: columns,
            blocks: blocks
        }
    }
    
    onTileClick(e, row, column) {
        this.setState({
            highlightedRow: row,
            highlightedColumn: column
        })
    }

    render() {
        this.onTileClick = this.onTileClick.bind(this)
        
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Block xIndex={0} yIndex={0} numbers={this.state.blocks[0]} highlightedColumn={this.state.highlightedColumn} highlightedRow={this.state.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block xIndex={0} yIndex={1} numbers={this.state.blocks[1]} highlightedColumn={this.state.highlightedColumn} highlightedRow={this.state.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block xIndex={0} yIndex={2} numbers={this.state.blocks[2]} highlightedColumn={this.state.highlightedColumn} highlightedRow={this.state.highlightedRow} clickEvent={this.onTileClick}/>
                </View>
                <View style={styles.row}>
                    <Block xIndex={1} yIndex={0} numbers={this.state.blocks[3]} highlightedColumn={this.state.highlightedColumn} highlightedRow={this.state.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block xIndex={1} yIndex={1} numbers={this.state.blocks[4]} highlightedColumn={this.state.highlightedColumn} highlightedRow={this.state.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block xIndex={1} yIndex={2} numbers={this.state.blocks[5]} highlightedColumn={this.state.highlightedColumn} highlightedRow={this.state.highlightedRow} clickEvent={this.onTileClick}/>
                </View>
                <View style={styles.row}>
                    <Block xIndex={2} yIndex={0} numbers={this.state.blocks[6]} highlightedColumn={this.state.highlightedColumn} highlightedRow={this.state.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block xIndex={2} yIndex={1} numbers={this.state.blocks[7]} highlightedColumn={this.state.highlightedColumn} highlightedRow={this.state.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block xIndex={2} yIndex={2} numbers={this.state.blocks[8]} highlightedColumn={this.state.highlightedColumn} highlightedRow={this.state.highlightedRow} clickEvent={this.onTileClick}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2
    },
    row: {
        flexDirection: 'row'
    }
});
