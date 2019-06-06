import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { selectTile } from "../../actions/actions";
import Block from './Block'

class Grid extends React.Component {  
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
                    <Block blockIndex={0} xIndex={0} yIndex={0} highlightedColumn={this.props.highlightedColumn} highlightedRow={this.props.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block blockIndex={1} xIndex={1} yIndex={0} highlightedColumn={this.props.highlightedColumn} highlightedRow={this.props.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block blockIndex={2} xIndex={2} yIndex={0} highlightedColumn={this.props.highlightedColumn} highlightedRow={this.props.highlightedRow} clickEvent={this.onTileClick}/>
                </View>
                <View style={styles.row}>
                    <Block blockIndex={3} xIndex={0} yIndex={1} highlightedColumn={this.props.highlightedColumn} highlightedRow={this.props.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block blockIndex={4} xIndex={1} yIndex={1} highlightedColumn={this.props.highlightedColumn} highlightedRow={this.props.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block blockIndex={5} xIndex={2} yIndex={1} highlightedColumn={this.props.highlightedColumn} highlightedRow={this.props.highlightedRow} clickEvent={this.onTileClick}/>
                </View>
                <View style={styles.row}>
                    <Block blockIndex={6} xIndex={0} yIndex={2} highlightedColumn={this.props.highlightedColumn} highlightedRow={this.props.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block blockIndex={7} xIndex={1} yIndex={2} highlightedColumn={this.props.highlightedColumn} highlightedRow={this.props.highlightedRow} clickEvent={this.onTileClick}/>
                    <Block blockIndex={8} xIndex={2} yIndex={2} highlightedColumn={this.props.highlightedColumn} highlightedRow={this.props.highlightedRow} clickEvent={this.onTileClick}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        aspectRatio: 1,
    },
    row: {
        flexDirection: 'row'
    }
});

const mapStateToProps = state => {
    return { 
        highlightedColumn: state.highlightedColumn,
        highlightedRow: state.highlightedRow
    };
};

connect(mapStateToProps, {selectTile})(Grid)