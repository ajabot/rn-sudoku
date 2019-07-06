import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Modal, Button, Text } from 'react-native'
import { resetGrid } from "../../actions/actions";

const GridCompletedModal = (props) => {
    return (
        <View style={styles.modal}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.completed}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>You've completed the grid!</Text>
                    <Button title="Try Again" color="green" onPress={props.resetGrid} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        marginTop: 22
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});

const mapStateToProps = state => {
    return {
        completed: state.gridCompleted
    };
};


export default connect(mapStateToProps, { resetGrid })(GridCompletedModal);