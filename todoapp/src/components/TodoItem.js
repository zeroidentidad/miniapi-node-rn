import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class TodoItem extends Component {
    render() {
        return (
            <View style={styles.todoContainer}>
                <Text style={styles.todoText}>
                    {this.props.text}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todoContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginBottom: -1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    todoText: {
    },
})