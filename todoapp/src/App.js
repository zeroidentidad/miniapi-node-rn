import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Main from './components/Main';
import { configureStore } from './redux/store';

export default class App extends Component {

  render() {
    //console.disableYellowBox = true;
    return (
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    );
  }
}
