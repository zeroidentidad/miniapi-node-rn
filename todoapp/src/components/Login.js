import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form';
import FTextInput from './FTextInput'
import {loginUser, signupUser, addAlert} from '../redux/actions';

const valRequired = value => {
  let result = value ? undefined : `No debe dejar vacío`;
  return result;
} 

class Login extends Component {

  state = { loading: false }

  onSignIn = () => {
    let {dispatch, email, password } = this.props

    alert(email)

    this.setState({loading: true});

    dispatch(loginUser(email, password)).then(() => {
      this.setState({
        loading: false
      })
    })
  }

  onSignUp = () => {
    let {dispatch, email, password } = this.props

    this.setState({loading: true});

    dispatch(signupUser(email, password)).then(() => {
      this.setState({
        loading: false
      });
    });
  }

    render() {  

        return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              To-Do 🗒️
            </Text>
          </View>
          <View style={styles.field}>
            <Field
              name={'email'}
              component={FTextInput}
              placeholder="Email"
              style={styles.textInput}
              validate={[valRequired]}              
              />             
          </View>
          <View style={styles.field}>
            <Field
              name={'password'}
              component={FTextInput}
              placeholder="Password"
              style={styles.textInput}
              validate={[valRequired]}               
              />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.onSignIn}>
              <Text style={styles.button}>
                Ingresar
              </Text>
            </TouchableOpacity>
              <TouchableOpacity onPress={this.onSignUp}>
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
    height: 40
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

const LoginForm = reduxForm({
  form: 'login'
})(Login)

const selector = formValueSelector('login')

const mapStateToProps = (state) => ({
  email: selector(state, 'email'),
  password: selector(state, 'password'),
});

export default connect(mapStateToProps)(LoginForm)