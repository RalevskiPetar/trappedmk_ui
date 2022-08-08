import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, createStore, compose } from 'redux';
import { UserReducer } from './Redux/Reducers'
import { ClothesReducer } from './Redux/Reducers'
import { combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk';
const allReducers = combineReducers({
  user: UserReducer,
  clothes: ClothesReducer
})

const store = createStore(allReducers , compose(
  applyMiddleware(thunk),
  composeWithDevTools()
  ))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);

