import React, { Component } from 'react';
import { Platform, StatusBar, Image } from 'react-native';
//import { TabNavigator } from "react-navigation";
//import { connect } from 'react-redux'
//import {unauthUser} from '../redux/actions';
import TodoList from './TodoList';

/*
class TodoMain extends Component {
onLogout = () => {
  this.props.dispatch(unauthUser)
}
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

class TodoMain extends Component {
  render() {
    return (
      <TodoList />
    );
  }
}

/* ========================== */
// Alternativa con TabNavs ref.
/* ========================== */
// Identificador OS cuando el código necesita cambiar entre Android y iOS.
/*const platformOS = Platform.OS.toLowerCase();
const TodoMain = TabNavigator(
  // ---------- Routes. ----------
  {
    TodoList: {
      screen: TodoList,
      navigationOptions: {
        tabBarLabel: "Todo List",
        tabBarIcon: ({ tintColor }) => (
          <Image source={require("../assets/todolist.png")}
            style={{ width: 32, height: 32, tintColor: tintColor }}
          />
        )
      }
    }, // Fin TodoListScreen
    NewTodo: {
      screen: NewTodo,
      navigationOptions: {
        //...
      }
    }, // Fin NewTodoScreen.

  }, // Fin routes
  // ---------- Options. ----------
  {
    initialRouteName: "TodoList",
    animationEnabled: false,
    swipeEnabled: true,
    backBehavior: "none",
    lazy: true,
    //Las pestañas van arriba para Android, abajo para iOS.
    tabBarPosition: platformOS === "android" ? "top" : "bottom",
    tabBarOptions: {
      activeTintColor: "#2ecc71",
      showIcon: true,
      //Las pestañas en Android están superpuestas por la barra de estado, así que agrega
      //padding para arreglar eso.
      style: { paddingTop: platformOS === "android" ? StatusBar.currentHeight : 0 }
    }
  } // Fin options.

);*/ /* Ref. TabNavigator. */

//export default connect()(TodoMain)
export default TodoMain