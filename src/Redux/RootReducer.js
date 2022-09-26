import { applyMiddleware, createStore, compose } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'

import { UserReducer } from './Users/Reducer'
import { ClothesReducer } from './Clothes/Reducer'
import { Money_Tracker_Reducer } from './Money/Reducer';
import { Store_Reducer } from './Store/Reducer';

const allReducers = combineReducers({
    user: UserReducer,
    clothes: ClothesReducer,
    money: Money_Tracker_Reducer,
    store: Store_Reducer
})

export const store = createStore(allReducers, compose(
    applyMiddleware(thunk),
    composeWithDevTools()
))