import Axios  from "axios";
import { 
    create_Money as create_MoneyCall ,
    update_Money as update_MoneyCall
 } from "./Api";

export const fetchMoneyTracker = () => async (dispatch , getate) => {
    dispatch( {type: "FETCH_MONEY_TRACK_REQUEST"});

    try {
        const response = await Axios.get("http://127.0.0.1:5000/money_tracker_all");
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
    .catch(e => {
        console.log(e)
        dispatch({type: "CREATE_MONEY_TRACK_FAILURE" , payload: e})
    })
}

export const update_Money = (money) => (dispatch , getState) => {
    dispatch({type: "UPDATE_MONEY_TRACK_REQUEST"})
    update_MoneyCall(money)
    .then(res => dispatch({type: "UPDATE_MONEY_TRACK_SUCCESS" , payload: res}))
    .catch(e => dispatch({type: "UPDATE_MONEY_TRACK_FAILURE" , payload: e}))
}