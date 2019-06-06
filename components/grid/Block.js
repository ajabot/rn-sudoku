import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import Tile from './tiles/Tile'
import HighlightedTile from './tiles/HighlightedTile'
import SelectedTile from './tiles/SelectedTile'

class Block extends React.Component {
    onTileClick(e, row, column) {
        this.setState({
            highlightedRow: row,
            highlightedColumn: column
        })
    }
    
    renderTiles(rowIndex) {
        const xIndex = this.props.xIndex * 3
        const yIndex = this.props.yIndex * 3 + rowIndex
        let blockIndex = rowIndex * 3
        let tiles = [];

        for (i = xIndex; i < (xIndex + 3); i++) {
            if (this.props.highlightedRow == i && this.props.highlightedColumn == yIndex) {
                tiles.push(<SelectedTile
                    key={i}
                    xIndex={i}
                    yIndex={yIndex}
                    content={this.props.numbers[blockIndex]}
                    clickEvent={this.props.clickEvent}
                />)
            } else if (this.props.highlightedRow == i || this.props.highlightedColumn == yIndex){
                tiles.push(<HighlightedTile
                    key={i}
                    xIndex={i}
                    yIndex={yIndex}
                    content={this.props.numbers[blockIndex]}
                    clickEvent={this.props.clickEvent}
                />)
            } else {
                tiles.push(<Tile
                    key={i}
                    xIndex={i}
                    yIndex={yIndex}
                    content={this.props.numbers[blockIndex]}
                    clickEvent={this.props.clickEvent}
                />)
            }
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

const mapStateToProps = state => {
    return { numbers: getBlock(state, this.props.blockId) };
};

export default connect(mapStateToProps)(Block);