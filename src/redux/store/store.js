import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { moviesReducer } from "../reducer/moviesReducer";


export const store = createStore(moviesReducer, applyMiddleware(thunk))