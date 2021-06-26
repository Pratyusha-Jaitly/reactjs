
// import {applyMiddleware,compose,createStore} from "redux";
import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit'

import createSagaMiddleware from "redux-saga";
 import saga from "../Sagas/sagas";
import foodReducer from "../reducers/index"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:{
                foodReducer
            },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});
sagaMiddleware.run(saga);

export default store;
