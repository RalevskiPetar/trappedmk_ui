import  Axios  from "axios";
import { create_Store as create_StoreCall } from "./Api";

export const fetch_Store = () => async (dispatch , getState) => {
    dispatch({type : "FETCH_STORE_REQUEST"});

    try{
        const response = await Axios.get("http://127.0.0.1:5000/product_stores");
        dispatch({type: "FETCH_STORE_SUCCESS" , payload : response.data})
    }
    catch(error){
        dispatch({type: "FETCH_STORE_FAILURE" , payload: error})
    }
}

export const create_Store = (store) => (dispatch , getState) => {
    dispatch({type: "CREATE_STORE_REQUEST"});
    create_StoreCall(store)
    .then(res => dispatch({type: "CREATE_STORE_SUCCESS" , payload: res}))
    .catch(e => dispatch({type: "CREATE_STORE_FAILURE" , payload : e}))
}