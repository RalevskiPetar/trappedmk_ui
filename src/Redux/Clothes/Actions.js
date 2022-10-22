import Axios from "axios";
import { API_URL } from "../constants";
import {
    createClothes as createClothesCall, 
    createCategory as createCategoryCall,
    updateClothes as updateClothesCall,
    updateCategories as updateCategoriesCall,
    ImagesAPI,
} from "./Api"


const check_token_expired = (e, default_action, dispatch) => {
    console.log(e)
    if (e?.msg === "Token has expired") dispatch({ type: "LOGOUT" })
    else dispatch(default_action)
}



export const fetchClothes = () => async (dispatch, getState) => {
    dispatch({ type: "FETCH_CLOTHES_REQUEST" });

    try {
        const response = await Axios.get(API_URL+"/clothes");
        dispatch({ type: "FETCH_CLOTHES_SUCCESS", payload: response.data })
    }
    catch (error) {
        dispatch({ type: "FETCH_CLOTHES_FAILURE", payload: error })
    }
}

export const fetchCategories = () => async (dispatch, getState) => {
    dispatch({ type: "FETCH_CATEGORIES_REQUEST" });

    try {
        const response = await Axios.get(API_URL+"/categories");
        dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: response.data })
    }
    catch (error) {
        dispatch({ type: "FETCH_CATEGORIES_FAILURE", payload: error })
    }
}

export const createClothes = (productID) => (dispatch, getState) => {
    dispatch({ type: "CREATE_NEW_PRODUCT_REQUEST" })
    createClothesCall(productID)
        .then(res => dispatch({ type: "CREATE_NEW_PRODUCT_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: "CREATE_NEW_PRODUCT_FAILURE", payload: e }))

}
export const createCategory = (categoryID) => (dispatch, getState) => {
    dispatch({ type: "CREATE_NEW_CATEGORY_REQUEST" })
    createCategoryCall(categoryID)
        .then(res => dispatch({ type: "CREATE_NEW_CATEGORY_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: "CREATE_NEW_CATEGORY_FAILURE", payload: e }))
}

export const updateClothes = (clothesID) => (dispatch, getState) => {
    dispatch({ type: "UPDATE_PRODUCT_REQUEST" })
    updateClothesCall(clothesID)
        .then(res => dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: "UPDATE_PRODUCT_FAILURE", payload: e }))

}

export const updateCategories = (categoryID) => (dispatch, getState) => {
    dispatch({ type: "UPDATE_CATEGORY_REQUEST" })
    updateCategoriesCall(categoryID)
        .then(res => dispatch({ type: "UPDATE_CATEGORY_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: "UPDATE_CATEGORY_FAILURE", payload: e }))

}


export const ImagesActions = {
    "create" : images => (dispatch, getState) => {
        dispatch({type: "CREATE_IMAGES_REQUEST"})
        ImagesAPI.create(images, getState()?.user?.user?.data?.token)
            .then(res => dispatch({ type: "CREATE_IMAGES_SUCCESS", payload: res }))
            .catch(e => check_token_expired(
                e, { type: "CREATE_IMAGES_FAILURE", payload: e }, dispatch
            ))
    },
    "raed" : () => (dispatch, getState) => {
        dispatch({type: "LOAD_IMAGES_REQUEST"})
        ImagesAPI.read(getState()?.user?.user?.data?.token)
            .then(res => dispatch({ type: "LOAD_IMAGES_SUCCESS", payload: res }))
            .catch(e => check_token_expired(
                e, { type: "LOAD_IMAGES_FAILURE", payload: e }, dispatch
            ))
    },
    "update" : image => (dispatch, getState) => {
        dispatch({type: "UPDATE_IMAGES_REQUEST"})
        ImagesAPI.update(image, getState()?.user?.user?.data?.token)
            .then(res => dispatch({ type: "UPDATE_IMAGES_SUCCESS", payload: res }))
            .catch(e => check_token_expired(
                e, { type: "UPDATE_IMAGES_FAILURE", payload: e }, dispatch
            ))
    },
    "delete" : id => (dispatch, getState) => {
        dispatch({type: "DELETE_IMAGES_REQUEST"})
        ImagesAPI.delete(id, getState()?.user?.user?.data?.token)
            .then(res => dispatch({ type: "DELETE_IMAGES_SUCCESS", payload: res }))
            .catch(e => check_token_expired(
                e, { type: "DELETE_IMAGES_FAILURE", payload: e }, dispatch
            ))
    }
}