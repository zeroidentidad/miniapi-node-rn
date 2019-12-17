import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { reduxForm } from 'redux-form';

export default class Login extends Component {
    render() {
        return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              To-Do 🗒️
            </Text>
          </View>
          <View style={styles.field}>
            <TextInput
              placeholder="Email"
              style={styles.textInput}/>
            <View>
            {/**/}
            </View>
          </View>
          <View style={styles.field}>
            <TextInput
              placeholder="Password"
              style={styles.textInput}/>
            <View>
            {/**/}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style={styles.button}>
                Ingresar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.button}>
                Registrarse
              </Text>
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
    paddingTop: 20,
    backgroundColor: '#2ecc71'
  },
  titleContainer: {
    padding: 20
  },
  title: {
    color: 'white',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center'
  },
  field: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: 'white'
  },
  textInput: {
    height: 26
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    fontSize: 30,
    color: 'black',
  },
  formError: {
    color: 'red'
  }
});
