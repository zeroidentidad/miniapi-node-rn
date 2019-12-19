import React, { Component } from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {createTodo} from '../redux/actions';

class NewTodo extends Component {

    state = {
      newTodoText: undefined,
      loading: false
    }

  addNewTodo = () =>{
    let {newTodoText} = this.state;
    let {dispatch} = this.props;

    if (newTodoText && newTodoText != "") {

      this.setState({loading: true});

      dispatch(createTodo(newTodoText)).then(() => {
        this.setState({loading: false});
        this.props.navigation.navigate("TodoList");
      });

    }
  }

  onBack = () =>{
    this.props.navigation.navigate("NewTodo");
  }

  render() {
    const renderScrollViewOrLoading = () => {
      if (this.state.loading) {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 18, fontWeight:'bold', color:'green'}}> Agregando ...</Text>
          </View>
        );
      } else {
        return (
          <ScrollView
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={(newTodoText) => {
                  this.setState({newTodoText})
                }}
                placeholder="Descripcion To-Do"
                style={styles.input}/>
            </View>
          </ScrollView>
        );
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.onBack}>
            <Icon name="chevron-left" size={32} color="white"/>
          </TouchableOpacity>
          <Text style={styles.title}>Agregar To-Do</Text>
          <TouchableOpacity onPress={this.addNewTodo}>
            <Icon name="check" size={32} color="white"/>
          </TouchableOpacity>
        </View>
        {renderScrollViewOrLoading()}
      </View>
    );
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
  },
  inputContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#2ecc71"
  },
  input: {
    height: 40
  }
});

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(NewTodo);