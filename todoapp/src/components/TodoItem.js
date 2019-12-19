import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import {connect} from 'react-redux'
import {deleteTodo} from '../redux/actions'

class TodoItem extends Component {

    state = { deleting: false }

    onDelete = () =>{
        this.setState({ deleting: true });
        this.props.dispatch(deleteTodo(this.props.id));
    }    
   
    render() {

        const renderDeleteButton = () => {
            if (!this.state.deleting) {
                return (
                    <TouchableOpacity onPress={this.onDelete}>
                        <Icon name="trashcan" size={32} color='#2ecc71' />
                    </TouchableOpacity>
                )
            }
        }

        return (
            <View style={styles.todoContainer}>
                <Text style={{fontSize: 18}}>{this.props.text}</Text>
                {renderDeleteButton()}
            </View>
        )

    }
}

const styles = StyleSheet.create({
    todoContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginTop: -1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default connect()(TodoItem)