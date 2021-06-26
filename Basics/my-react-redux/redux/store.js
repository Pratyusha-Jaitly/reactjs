import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import foodReducer from './reducers';
const rootReducer = combineReducers({
    foodReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));