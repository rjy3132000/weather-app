import { applyMiddleware, createStore } from "redux";
import  rootReducers  from "./Reducers/index"
import thunk from "redux-thunk";

let store = createStore(rootReducers, applyMiddleware(thunk));

export default store;