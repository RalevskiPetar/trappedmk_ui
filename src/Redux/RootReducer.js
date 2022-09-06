import { applyMiddleware, createStore, compose } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'

import { UserReducer } from './Users/Reducer'
import { ClothesReducer } from './Clothes/Reducer'

const allReducers = combineReducers({
    user: UserReducer,
    clothes: ClothesReducer
})

export const store = createStore(allReducers, compose(
    applyMiddleware(thunk),
    composeWithDevTools()
))