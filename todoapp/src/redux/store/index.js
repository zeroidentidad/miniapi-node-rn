import { createStore } from 'redux';
import reducer from '../reducer';

const defaultState = {
    todos: []
}

exports.configureStore = (initialState = defaultState) => {
    let store = createStore(reducer, initialState)
    return store;
}