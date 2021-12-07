import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { singleRecipeReducer } from '../src/Redux/reducers/RecipeCardReducer';
import { createStore } from "redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


const store = createStore (singleRecipeReducer);

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)