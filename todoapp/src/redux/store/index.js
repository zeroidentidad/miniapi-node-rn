import { createStore, compose } from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import reducer from '../reducer';
import { AsyncStorage } from 'react-native';

const defaultState = {
    todos: []
}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducer);

exports.configureStore = (initialState = defaultState) => {
    const store = createStore(persistedReducer, initialState)
    persistStore(store)
    return store;
}