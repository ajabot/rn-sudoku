import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native'
import { connect } from 'react-redux'
import { fillTile } from "../../actions/actions";

const NumberButton = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            props.fillTile(props.highlightedRow, props.highlightedColumn, props.value)
            }}>
            <View style={styles.button}>
                <Text>
                    {props.value}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 25,
        backgroundColor: 'skyblue',
        justifyContent: "center",
        alignItems: "center"
    }
});

const mapStateToProps = (state, ownProps) => {
    return {
        highlightedColumn: state.highlightedColumn,
        highlightedRow: state.highlightedRow,
        title: ownProps.title
    };
};

export default connect(mapStateToProps, { fillTile })(NumberButton);