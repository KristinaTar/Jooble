import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./reducer";



let reducers=combineReducers({
    weatherReducer
});


const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));
export default store;