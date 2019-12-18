import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import reducer from '../reducer';
import { AsyncStorage } from 'react-native';

const defaultState = {/*todos: []*/}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducer);

exports.configureStore = (initialState = defaultState) => {
    const store = createStore(persistedReducer, initialState, compose(
        applyMiddleware(thunk)
    ))
    persistStore(store)
    return store;
}