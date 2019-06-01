import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tile from './Tile'

export default class Grid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            highlightedRow: null,
            highlightedColumn: null
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
                    <Tile xIndex={1} yIndex={1} content={1} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 1}/>
                    <Tile xIndex={1} yIndex={2} content={2} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 2}/>
                    <Tile xIndex={1} yIndex={3} content={3} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 3}/>
                </View>
                <View style={styles.row}>
                    <Tile xIndex={2} yIndex={1} content={4} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 1}/>
                    <Tile xIndex={2} yIndex={2} content={5} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 2}/>
                    <Tile xIndex={2} yIndex={3} content={6} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 3}/>
                </View>
                <View style={styles.row}>
                    <Tile xIndex={3} yIndex={1} content={7} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 1}/>
                    <Tile xIndex={3} yIndex={2} content={8} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 2}/>
                    <Tile xIndex={3} yIndex={3} content={9} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 3}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 540,
        height: 540,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        height: 60
    }
});
