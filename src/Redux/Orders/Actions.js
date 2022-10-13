import  Axios  from "axios";
import { MdCatchingPokemon } from "react-icons/md";
import { API_URL } from "../constants";
import { get_Orders as get_OrdersCall,
         create_Order as create_OrderCall,
         get_Order_Statuses as get_Order_StatusesCall ,
         update_Order as update_OrderCall
} from "./Api";

export const fetchOrders = () => async(dispatch , getState) => {
    dispatch( {type : "FETCH_ORDERS_REQUEST"});

    try {
        const response = await Axios.get(API_URL+"/orders")
        dispatch({type : "FETCH_ORDERS_SUCCESS" , payload: response.data})
    }
    catch(error) {
        dispatch({type : "FETCH_ORDERS_FAILURE" , payload : error})
    }
}

export const fetchOrderStatuses = () => async(dispatch , getState) => {
    dispatch({type : "FETCH_ORDER_STATUSES_REQUEST"});

    try {
        const response = await Axios.get(API_URL+"/order_statuses")
        dispatch({type : "FETCH_ORDER_STATUSES_SUCCESS" , payload : response.data})
    }
    catch(error){
        dispatch({type : "FETCH_ORDER_STATUSES_FAILURE" , payload : error})
    }
}

export const create_Order  = (order) => (dispatch , getState) => {
    dispatch({type : "CREATE_ORDER_REQUEST"})
    create_OrderCall(order)
    .then(res => dispatch({type : "CREATE_ORDER_SUCCESS" , payload : res}))
    .catch(e => dispatch({type : " CREATE_ORDER_FAILURE" , payload : e}))

}

export const update_Order = (order) => (dispatch , getState) => {
    dispatch({type : "UPDATE_ORDER_REQUEST"})
    update_OrderCall(order)
    .then(res => dispatch({type : "UPDATE_ORDER_SUCCESS" , payload : res}))
    .catch(e => dispatch({type : "UPDATE_ORDER_FAILURE" , payload : e}))
}