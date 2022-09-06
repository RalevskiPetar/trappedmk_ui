import { applyMiddleware, createStore, compose } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'

import { UserReducer } from './Users/Reducer'
import { ClothesReducer } from './Clothes/Reducer'
import { Money_Tracker_Reducer } from './Money/Reducer';

const allReducers = combineReducers({
    user: UserReducer,
    clothes: ClothesReducer,
    money: Money_Tracker_Reducer
})

export const store = createStore(allReducers, compose(
    applyMiddleware(thunk),
    composeWithDevTools()
))