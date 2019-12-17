import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {deleteTodo} from '../redux/actions'

class TodoItem extends Component {

    deleteSelf=()=>{
        this.props.dispatch(deleteTodo(this.props.id))
    } 
   
    render() {
        return (
            <TouchableOpacity onPress={this.deleteSelf}>
            <View style={styles.todoContainer}>
                <Text style={styles.todoText}>
                    {this.props.text}
                </Text>
            </View>
            </TouchableOpacity>
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

export default connect()(TodoItem)