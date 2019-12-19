import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity, RefreshControl } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import { StackNavigator } from "react-navigation";
//import {connect} from 'react-redux'
//import TodoItem from './TodoItem'

class TodoList extends Component {

    state = {
        refreshing: false
    }

    onLogout = () => {

    }    

    addNewTodo = () =>{

    }

    onRefresh = () =>{

    }   

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={this.onLogout}>
                        <Icon name="sign-out" size={20} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>To-Do List</Text>
                    <TouchableOpacity onPress={this.addNewTodo}>
                        <Icon name="diff-added" size={20} color="white" />
                    </TouchableOpacity>
                </View>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2ecc71'
    },
    title: {
        color: 'white',
        fontSize: 20
    },
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

/**
 * ###################################
 * Definir la pantalla en sí mismas.
 * ###################################
 */
const TodoListStackNav = StackNavigator(
  /* ----------  Routes ----------  */
  {
    TodoList : { screen : TodoList },
    //NewTodo : { screen : NewTodo }
  },
  /* ----------  Options ----------  */
  {
    headerMode : "none",
    initialRouteName : "TodoList"
  }
); /* Fin StackNavigator. */


/*const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoListNav)*/
export default TodoListStackNav