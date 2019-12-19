import React, { Component } from 'react';
//import { Platform, StatusBar, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//import { connect } from 'react-redux'
//import {unauthUser} from '../redux/actions';
import TodoList from './TodoList';
import NewTodo from './NewTodo';

/*
class TodoMain extends Component {
  onLogout = () => { this.props.dispatch(unauthUser) }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.onLogout}>
          <Text>Logout</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
*/

const AppNavigator = createStackNavigator({
  TodoList: TodoList,
  NewTodo: NewTodo
}, {
  header: null,
  headerMode: 'none',
  initialRouteName: 'TodoList'
})

const TodoMain = createAppContainer(AppNavigator);

//export default connect()(TodoMain)
export default TodoMain