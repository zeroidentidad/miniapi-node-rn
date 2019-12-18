import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import {unauthUser} from '../redux/actions';

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

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect()(TodoMain)