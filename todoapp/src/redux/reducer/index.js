//import uuid from 'uuid'
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer';

module.exports = combineReducers({
    form: formReducer,
    auth: authReducer
})

/*module.exports = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let newTodos = [
                ...state.todos,
                {
                    text: action.text,
                    id: uuid.v4()
                }
            ];
            return {
                todos: newTodos
            }                     
        default:
            return state;
    }
}*/