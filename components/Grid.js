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
                    <Tile xIndex={1} yIndex={1} content={2} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 1}/>
                    <Tile xIndex={1} yIndex={2} content={3} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 2}/>
                    <Tile xIndex={1} yIndex={3} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 3}/>
                    <Tile xIndex={1} yIndex={4} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 4} />
                    <Tile xIndex={1} yIndex={5} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 5} />
                    <Tile xIndex={1} yIndex={6} content={1} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 6} />
                    <Tile xIndex={1} yIndex={7} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 7} />
                    <Tile xIndex={1} yIndex={8} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 8} />
                    <Tile xIndex={1} yIndex={9} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 1 || this.state.highlightedColumn == 9} />
                </View>
                <View style={styles.row}>
                    <Tile xIndex={2} yIndex={1} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 1}/>
                    <Tile xIndex={2} yIndex={2} content={7} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 2}/>
                    <Tile xIndex={2} yIndex={3} content={9} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 3}/>
                    <Tile xIndex={2} yIndex={4} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 4} />
                    <Tile xIndex={2} yIndex={5} content={3} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 5} />
                    <Tile xIndex={2} yIndex={6} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 6} />
                    <Tile xIndex={2} yIndex={7} content={5} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 7} />
                    <Tile xIndex={2} yIndex={8} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 8} />
                    <Tile xIndex={2} yIndex={9} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 2 || this.state.highlightedColumn == 9} />
                </View>
                <View style={styles.row}>
                    <Tile xIndex={3} yIndex={1} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 1}/>
                    <Tile xIndex={3} yIndex={2} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 2}/>
                    <Tile xIndex={3} yIndex={3} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 3}/>
                    <Tile xIndex={3} yIndex={4} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 4} />
                    <Tile xIndex={3} yIndex={5} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 5} />
                    <Tile xIndex={3} yIndex={6} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 6} />
                    <Tile xIndex={3} yIndex={7} content={7} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 7} />
                    <Tile xIndex={3} yIndex={8} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 8} />
                    <Tile xIndex={3} yIndex={9} content={2} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 3 || this.state.highlightedColumn == 9} />
                </View>
                <View style={styles.row}>
                    <Tile xIndex={4} yIndex={1} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 4 || this.state.highlightedColumn == 1} />
                    <Tile xIndex={4} yIndex={2} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 4 || this.state.highlightedColumn == 2} />
                    <Tile xIndex={4} yIndex={3} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 4 || this.state.highlightedColumn == 3} />
                    <Tile xIndex={4} yIndex={4} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 4 || this.state.highlightedColumn == 4} />
                    <Tile xIndex={4} yIndex={5} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 4 || this.state.highlightedColumn == 5} />
                    <Tile xIndex={4} yIndex={6} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 4 || this.state.highlightedColumn == 6} />
                    <Tile xIndex={4} yIndex={7} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 4 || this.state.highlightedColumn == 7} />
                    <Tile xIndex={4} yIndex={8} content={7} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 4 || this.state.highlightedColumn == 8} />
                    <Tile xIndex={4} yIndex={9} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 4 || this.state.highlightedColumn == 9} />
                </View>
                <View style={styles.row}>
                    <Tile xIndex={5} yIndex={1} content={3} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 5 || this.state.highlightedColumn == 1} />
                    <Tile xIndex={5} yIndex={2} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 5 || this.state.highlightedColumn == 2} />
                    <Tile xIndex={5} yIndex={3} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 5 || this.state.highlightedColumn == 3} />
                    <Tile xIndex={5} yIndex={4} content={8} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 5 || this.state.highlightedColumn == 4} />
                    <Tile xIndex={5} yIndex={5} content={5} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 5 || this.state.highlightedColumn == 5} />
                    <Tile xIndex={5} yIndex={6} content={2} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 5 || this.state.highlightedColumn == 6} />
                    <Tile xIndex={5} yIndex={7} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 5 || this.state.highlightedColumn == 7} />
                    <Tile xIndex={5} yIndex={8} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 5 || this.state.highlightedColumn == 8} />
                    <Tile xIndex={5} yIndex={9} content={1} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 5 || this.state.highlightedColumn == 9} />
                </View>
                <View style={styles.row}>
                    <Tile xIndex={6} yIndex={1} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 6 || this.state.highlightedColumn == 1} />
                    <Tile xIndex={6} yIndex={2} content={6} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 6 || this.state.highlightedColumn == 2} />
                    <Tile xIndex={6} yIndex={3} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 6 || this.state.highlightedColumn == 3} />
                    <Tile xIndex={6} yIndex={4} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 6 || this.state.highlightedColumn == 4} />
                    <Tile xIndex={6} yIndex={5} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 6 || this.state.highlightedColumn == 5} />
                    <Tile xIndex={6} yIndex={6} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 6 || this.state.highlightedColumn == 6} />
                    <Tile xIndex={6} yIndex={7} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 6 || this.state.highlightedColumn == 7} />
                    <Tile xIndex={6} yIndex={8} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 6 || this.state.highlightedColumn == 8} />
                    <Tile xIndex={6} yIndex={9} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 6 || this.state.highlightedColumn == 9} />
                </View>
                <View style={styles.row}>
                    <Tile xIndex={7} yIndex={1} content={9} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 7 || this.state.highlightedColumn == 1} />
                    <Tile xIndex={7} yIndex={2} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 7 || this.state.highlightedColumn == 2} />
                    <Tile xIndex={7} yIndex={3} content={6} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 7 || this.state.highlightedColumn == 3} />
                    <Tile xIndex={7} yIndex={4} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 7 || this.state.highlightedColumn == 4} />
                    <Tile xIndex={7} yIndex={5} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 7 || this.state.highlightedColumn == 5} />
                    <Tile xIndex={7} yIndex={6} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 7 || this.state.highlightedColumn == 6} />
                    <Tile xIndex={7} yIndex={7} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 7 || this.state.highlightedColumn == 7} />
                    <Tile xIndex={7} yIndex={8} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 7 || this.state.highlightedColumn == 8} />
                    <Tile xIndex={7} yIndex={9} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 7 || this.state.highlightedColumn == 9} />
                </View>
                <View style={styles.row}>
                    <Tile xIndex={8} yIndex={1} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 8 || this.state.highlightedColumn == 1} />
                    <Tile xIndex={8} yIndex={2} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 8 || this.state.highlightedColumn == 2} />
                    <Tile xIndex={8} yIndex={3} content={1} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 8 || this.state.highlightedColumn == 3} />
                    <Tile xIndex={8} yIndex={4} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 8 || this.state.highlightedColumn == 4} />
                    <Tile xIndex={8} yIndex={5} content={2} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 8 || this.state.highlightedColumn == 5} />
                    <Tile xIndex={8} yIndex={6} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 8 || this.state.highlightedColumn == 6} />
                    <Tile xIndex={8} yIndex={7} content={6} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 8 || this.state.highlightedColumn == 7} />
                    <Tile xIndex={8} yIndex={8} content={8} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 8 || this.state.highlightedColumn == 8} />
                    <Tile xIndex={8} yIndex={9} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 8 || this.state.highlightedColumn == 9} />
                </View>
                <View style={styles.row}>
                    <Tile xIndex={9} yIndex={1} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 9 || this.state.highlightedColumn == 1} />
                    <Tile xIndex={9} yIndex={2} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 9 || this.state.highlightedColumn == 2} />
                    <Tile xIndex={9} yIndex={3} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 9 || this.state.highlightedColumn == 3} />
                    <Tile xIndex={9} yIndex={4} content={9} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 9 || this.state.highlightedColumn == 4} />
                    <Tile xIndex={9} yIndex={5} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 9 || this.state.highlightedColumn == 5} />
                    <Tile xIndex={9} yIndex={6} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 9 || this.state.highlightedColumn == 6} />
                    <Tile xIndex={9} yIndex={7} content={null} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 9 || this.state.highlightedColumn == 7} />
                    <Tile xIndex={9} yIndex={8} content={3} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 9 || this.state.highlightedColumn == 8} />
                    <Tile xIndex={9} yIndex={9} content={5} clickEvent={this.onTileClick} isHighlighted={this.state.highlightedRow == 9 || this.state.highlightedColumn == 9} />
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
        flexDirection: 'row',
        flex: 1
    }
});
