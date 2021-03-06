import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './Redux/Reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer,composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

