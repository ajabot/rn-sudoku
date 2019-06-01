import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Tile from './Tile'

export default class Block extends React.Component {
    renderRows(xIndex, yIndex) {
        let columns = [];
        for (i = yIndex; i < yIndex + 3; i++) {
             columns.push = i
        }
        return (
            <View>
                {columns.map(function (yIndex, key) {
                    return <Tile xIndex={xIndex} yIndex={yIndex}/>
                })}
            </View>
        )
    }

    render() {
        return (
            <View>
                {this.renderRows(props.xIndex, props.Yindex)}
                {this.renderRows(props.xIndex, props.Yindex)}
                {this.renderRows(props.xIndex, props.Yindex)}
            </View>
        );
    }
}