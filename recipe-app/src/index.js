import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { singleRecipeReducer } from './redux/reducers/RecipeCardReducer';
import { createStore } from "redux";

const store = createStore (singleRecipeReducer);

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)