import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import {connect} from 'react-redux'
import TodoItem from './TodoItem'
import {unauthUser, getTodos, setTodos} from '../redux/actions'

class TodoList extends Component {

    state = {
        refreshing: false
    }

    onLogout = () => {
        this.props.dispatch(setTodos([]));
        this.props.dispatch(unauthUser);
    }    

    addNewTodo = () =>{
        this.props.navigation.navigate("NewTodo");
    }

    onRefresh = () =>{
        this.setState({ refreshing: true });
        this.props.dispatch(getTodos).then(() => {
            this.setState({ refreshing: false });
        })
    }   

    render() {

        const renderTodos = () => {
            return this.props.todos.map((todo) => (<TodoItem key={todo._id} text={todo.text} id={todo._id} />))
        }

        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={this.onLogout}>
                        <Icon name="sign-out" size={32} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>To-Do List</Text>
                    <TouchableOpacity onPress={this.addNewTodo}>
                        <Icon name="diff-added" size={32} color="white" />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh} />
                    }
                    automaticallyAdjustContentInsets={false}
                    contentContainerStyle={styles.scrollViewContainer}>
                    {renderTodos()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    topBar: {
        padding: 16,
        paddingTop: 28,
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2ecc71'
    },
    title: {
        color: 'white',
        fontSize: 20
    }
});


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)