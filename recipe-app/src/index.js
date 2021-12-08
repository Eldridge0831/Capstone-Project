import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import { createStore } from "redux";

const store = createStore (rootReducer);

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)