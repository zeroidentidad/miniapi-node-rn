import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native'
import {connect} from 'react-redux'
import TodoItem from './TodoItem'
import {addTodo} from '../redux/actions'

class Main extends Component {

    state = {
        newTodoText: ""
    }

    addNewTodo=()=>{
        const { newTodoText } = this.state;
        if (newTodoText && newTodoText!=""){
            this.setState({ newTodoText: "" })
            this.props.dispatch(addTodo(newTodoText))
        }
    }

    render() {

        const renderTodos = () => {
            return this.props.todos.map((todo) => (<TodoItem text={todo.text} key={todo.id} id={todo.id} />))
        }

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.topBar}>
                    <Text style={styles.title}> To-Do </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                    onChange={(e)=>{ this.setState({newTodoText: e.nativeEvent.text}) }}
                    value={this.state.newTodoText}
                    returnKeyType="done"
                    placeholder="nuevo To-Do"
                    onSubmitEditing={this.addNewTodo}
                    style={styles.input} />
                </View>
                <ScrollView
                automaticallyAdjustContentInsets={false}
                >
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
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2ecc71'
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    inputContainer: {
        padding: 8,
        paddingTop: 0,
        backgroundColor: '#2ecc71'
    },
    input: {
        height: 26,
        padding: 4,
        paddingLeft: 8,
        borderRadius: 8,
        backgroundColor: 'white'
    }
})

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Main)