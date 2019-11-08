// REACT IMPORTS
import React from "react";
import ReactDOM from "react-dom";

// REDUX/REACT-REDUX
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// COMPONENTS
import App from "./components/App";
import { reducer as smurfReducer } from './reducers/index';

// STYLING
import "./index.css";

const rootReducer = combineReducers({
    smurf: smurfReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);
