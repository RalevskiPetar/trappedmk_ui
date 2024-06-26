import Axios  from "axios";
import { API_URL } from "../constants.js";
import { 
    create_Money as create_MoneyCall ,
    update_Money as update_MoneyCall
 } from "./Api";

export const setMoneyState = newState => (dispatch, getState) => dispatch( {type : "SET_MONEY_STATE", payload: newState })
 
export const fetchMoneyTracker = () => async (dispatch , getState) => { 
    dispatch( {type: "FETCH_MONEY_TRACK_REQUEST"});

    try {
        const response = await Axios.get(API_URL+"/money_tracker_all");
        dispatch({ type: "FETCH_MONEY_TRACK_SUCCESS" , payload: response.data})
    }
    catch(error) {
        dispatch({type: "FETCH_MONEY_TRACK_FAILURE" , payload: error})
    }
}

export const create_Money = (money) => (dispatch , getState) => {
    dispatch({type: "CREATE_MONEY_TRACK_REQUEST"})
    create_MoneyCall(money)
    .then(res => dispatch({type: "CREATE_MONEY_TRACK_SUCCESS" , payload: res}))
    .catch(e => dispatch({type: "CREATE_MONEY_TRACK_FAILURE" , payload: e})
    )
}

export const update_Money = (money) => (dispatch , getState) => {
    dispatch({type: "UPDATE_MONEY_TRACK_REQUEST"})
    update_MoneyCall(money)
    .then(res => dispatch({type: "UPDATE_MONEY_TRACK_SUCCESS" , payload: res}))
    .catch(e => dispatch({type: "UPDATE_MONEY_TRACK_FAILURE" , payload: e}))
}