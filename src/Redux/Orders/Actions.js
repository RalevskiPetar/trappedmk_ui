import Axios from "axios";
import { MdCatchingPokemon } from "react-icons/md";
import { API_URL } from "../constants";
import {
    get_Orders as get_OrdersCall,
    create_Order as create_OrderCall,
    get_Order_Statuses as get_Order_StatusesCall,
    update_Order as update_OrderCall,
    cartApi,
    wishlistApi,
    OrderFromCart
} from "./Api";

const check_token_expired = (e, default_action, dispatch) => {
    console.log(e)
    if (e?.msg === "Token has expired") dispatch({ type: "LOGOUT" })
    else dispatch(default_action)
}

export const fetchOrders = () => async (dispatch, getState) => {
    dispatch({ type: "FETCH_ORDERS_REQUEST" });

    try {
        const response = await Axios.get(API_URL + "/orders")
        dispatch({ type: "FETCH_ORDERS_SUCCESS", payload: response.data })
    }
    catch (error) {
        dispatch({ type: "FETCH_ORDERS_FAILURE", payload: error })
    }
}

export const fetchOrderStatuses = () => async (dispatch, getState) => {
    dispatch({ type: "FETCH_ORDER_STATUSES_REQUEST" });

    try {
        const response = await Axios.get(API_URL + "/order_statuses")
        dispatch({ type: "FETCH_ORDER_STATUSES_SUCCESS", payload: response.data })
    }
    catch (error) {
        dispatch({ type: "FETCH_ORDER_STATUSES_FAILURE", payload: error })
    }
}

export const create_Order = (order) => (dispatch, getState) => {
    dispatch({ type: "CREATE_ORDER_REQUEST" })
    create_OrderCall(order)
        .then(res => dispatch({ type: "CREATE_ORDER_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: " CREATE_ORDER_FAILURE", payload: e }))

}

export const update_Order = (order) => (dispatch, getState) => {
    dispatch({ type: "UPDATE_ORDER_REQUEST" })
    update_OrderCall(order)
        .then(res => dispatch({ type: "UPDATE_ORDER_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: "UPDATE_ORDER_FAILURE", payload: e }))
}


export const CartActions = {
    "create": cart => (dispatch, getState) => {
        dispatch({ type: "CREATE_CART_REQUEST" })
        cartApi.create(cart, getState()?.user?.user?.data?.token)
            .then(res => dispatch({ type: "CREATE_CART_SUCCESS", payload: res }))
            .catch(e => check_token_expired(
                e, { type: "CREATE_CART_FAILURE", payload: e }, dispatch
            ))
    },
    "read": () => (dispatch, getState) => {
        dispatch({ type: "LOAD_CART_REQUEST" })
        cartApi.read(getState()?.user?.user?.data?.token)
            .then(res => dispatch({ type: "LOAD_CART_SUCCESS", payload: res }))
            .catch(e => check_token_expired(
                e, { type: "LOAD_CART_FAILURE", payload: e }, dispatch
            ))
    },
    "update": cart => (dispatch, getState) => {
        dispatch({ type: "UPDATE_CART_REQUEST" })
        cartApi.update(cart, getState()?.user?.user?.data?.token)
            .then(res => dispatch({ type: "UPDATE_CART_SUCCESS", payload: res }))
            .catch(e => check_token_expired(
                e, { type: "UPDATE_CART_FAILURE", payload: e }, dispatch
            ))
    },
    "delete": id => (dispatch, getState) => {
        dispatch({ type: "DELETE_CART_REQUEST" })
        cartApi.delete(id, getState()?.user?.user?.data?.token)
            .then(res => dispatch({ type: "DELETE_CART_SUCCESS", payload: res }))
            .catch(e => check_token_expired(
                e, { type: "DELETE_CART_FAILURE", payload: e }, dispatch
            ))
    },
}

export const WishlistActions = {
    "create": item => (dispatch, getState) => {
        dispatch({ type: "CREATE_WISHLIST_REQUEST" })
        wishlistApi.create(item, getState()?.user?.user?.data?.token)
            .then(res => dispatch({ type: "CREATE_WISHLIST_SUCCESS", payload: res }))
            .catch(e => check_token_expired(
                e, { type: "CREATE_CART_FAILURE", payload: e }, dispatch
            ))
    },
    "read": () => (dispatch, getState) => {
        dispatch({ type: "LOAD_CART_REQUEST" })
        wishlistApi.read(getState()?.user?.user?.data?.token)
            .then(res => dispatch({ type: "LOAD_WISHLIST_SUCCESS", payload: res }))
            .catch(e => check_token_expired(
                e, { type: "LOAD_WISHLIST_FAILURE", payload: e }, dispatch
            ))
    },
    "delete": id => (dispatch, getState) => {
        dispatch({ type: "DELETE_WISHLIST_REQUEST" })
        wishlistApi.delete(id, getState()?.user?.user?.data?.token)
            .then(res => dispatch({ type: "DELETE_WISHLIST_SUCCESS", payload: res }))
            .catch(e => check_token_expired(
                e, { type: "DELETE_WISHLIST_FAILURE", payload: e }, dispatch
            ))
    },
}


export const orderFromCart = cart => (dispatch, getState) => {
    dispatch({ type: "ORDER_FROM_CART_REQUEST" })
    OrderFromCart(cart, getState()?.user?.user?.data?.token)
        .then(res => {
            console.log(res)
            dispatch({ type: "ORDER_FROM_CART_SUCCESS", payload: res })
        })
        .catch(e => check_token_expired(
            e, { type: "ORDER_FROM_CART_FAILURE", payload: e }, dispatch
        ))
}