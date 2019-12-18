import React, { Component } from 'react'
import {Text, View, StyleSheet, StatusBar} from 'react-native'
import {connect} from 'react-redux'
//import TodoItem from './TodoItem'
//import {addTodo} from '../redux/actions'
import Login from './Login'
import TodoMain from './TodoMain'
import AlertContainer from './alerts/AlertContainer';

class Main extends Component {

    state = {}

    render() {
      const renderMainView = () => {
        if (this.props.user_id) {
          return (
            <TodoMain />
          );
        } else {
          return (
            <Login />
          );
        }
      }
      return (
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          {renderMainView()}
          <AlertContainer />
        </View>
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
  return {
    user_id: state.auth.user_id
  }
}

export default connect(mapStateToProps)(Main)