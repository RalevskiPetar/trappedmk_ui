import { applyMiddleware, createStore, compose } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'


import { UserReducer } from './Users/Reducer'
import { ClothesReducer } from './Clothes/Reducer'
import { Money_Tracker_Reducer } from './Money/Reducer';
import { Store_Reducer } from './Store/Reducer';
import { Order_Reducer } from './Orders/Reducer';

const allReducers = combineReducers({
    user: UserReducer,
    clothes: ClothesReducer,
    money: Money_Tracker_Reducer,
    store: Store_Reducer,
    orders: Order_Reducer
})

const saveStoreToLS = state => {
    try {
        const stringified = JSON.stringify(state)
        localStorage.setItem("store", stringified)
    } catch (e) {
        console.log(e)
    }
}

const loadStoreFromLS = () => {
    try {
        const stringified = localStorage.getItem("store")
        if (stringified == null) return undefined
        else {
            const state = JSON.parse(stringified)
            return {
                user: state.user,
                tempCart: state.tempCart,
            }
        }
    } catch (e) {
        console.log(e)
    }
}

export const store = createStore(
    allReducers,
    loadStoreFromLS(),
    composeWithDevTools(applyMiddleware(thunk))
)
store.subscribe(() => saveStoreToLS(store.getState()))