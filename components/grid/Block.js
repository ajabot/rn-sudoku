import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { getBlock } from "../../selectors/selectors"
import { fillTile } from "../../actions/actions";

import Tile from './tiles/Tile'
import HighlightedTile from './tiles/HighlightedTile'
import SelectedTile from './tiles/SelectedTile'

class Block extends React.Component {
    renderTiles(rowIndex) {
        const xIndex = this.props.xIndex * 3 + rowIndex
        const yIndex = this.props.yIndex * 3
        let blockIndex = rowIndex * 3
        let tiles = [];

        for (i = yIndex; i < (yIndex + 3); i++) {
            if (this.props.highlightedRow == xIndex && this.props.highlightedColumn == i) {
                tiles.push(<SelectedTile
                    key={i}
                    xIndex={xIndex}
                    yIndex={i}
                    content={this.props.numbers[blockIndex]}
                />)
            } else if (this.props.highlightedRow == xIndex || this.props.highlightedColumn == i){
                tiles.push(<HighlightedTile
                    key={i}
                    xIndex={xIndex}
                    yIndex={i}
                    content={this.props.numbers[blockIndex]}
                />)
            } else {
                tiles.push(<Tile
                    key={i}
                    xIndex={xIndex}
                    yIndex={i}
                    content={this.props.numbers[blockIndex]}
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

const mapStateToProps = (state, ownProps) => {
    return { numbers: [...getBlock(state, ownProps.blockIndex)] };
};

export default connect(mapStateToProps, {fillTile})(Block);