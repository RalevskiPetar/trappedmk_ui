import Axios from "axios";
import { API_URL } from "../constants";
import {
    createClothes as createClothesCall, 
    createCategory as createCategoryCall,
    updateClothes as updateClothesCall,
    updateCategories as updateCategoriesCall,
} from "./Api"



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