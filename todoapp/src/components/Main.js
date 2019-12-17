import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
//import TodoItem from './TodoItem'
//import {addTodo} from '../redux/actions'
import Login from './Login'

class Main extends Component {

    state = {}

    render() {
        return (
            <Login />
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ccc'
  },
})

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Main)