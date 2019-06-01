import React, { Component } from 'react'
import { View } from 'react-native'

const Block = (props) => {
    return (
        <View style={styles.block}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        borderWidth: 2
    }
});