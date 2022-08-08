import Axios from "axios";
import {
    createUser as createUserCall
    , createUser_Type as createUser_TypeCall
    , createClothes as createClothesCall
    , createCategory as createCategoryCall
    , updateUser as updateUserCall
    , updateUser_Type as updateUser_TypeCall
    , updateClothes as updateClothesCall,
    updateCategories as updateCategoriesCall,
    login as LoginCall,
    fetchAllusers
} from "../Api"

export const logout = () => dispatch => dispatch({ type: "LOGOUT" })

export const fetchUsers = () => async (dispatch, getState) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    fetchAllusers(getState().user.user.data.token)
        .then(res => dispatch({ type: "FETCH_USERS_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: "FETCH_USERS_FAILURE", payload: e }))
}

export const fetchUserTypes = () => async (dispatch, getState) => {
    dispatch({ type: "FETCH_USER_TYPES_REQUEST" });

    try {
        const response = await Axios.get("http://127.0.0.1:5000/user_types");
        dispatch({ type: "FETCH_USER_TYPES_SUCCESS", payload: response.data })
    }
    catch (error) {
        dispatch({ type: "FETCH_USER_TYPE_FAILURE", payload: error })
    }
}

export const fetchClothes = () => async (dispatch, getState) => {
    dispatch({ type: "FETCH_CLOTHES_REQUEST" });

    try {
        const response = await Axios.get("http://127.0.0.1:5000/clothes");
        dispatch({ type: "FETCH_CLOTHES_SUCCESS", payload: response.data })
    }
    catch (error) {
        dispatch({ type: "FETCH_CLOTHES_FAILURE", payload: error })
    }
}

export const fetchCategories = () => async (dispatch, getState) => {
    dispatch({ type: "FETCH_CATEGORIES_REQUEST" });

    try {
        const response = await Axios.get("http://127.0.0.1:5000/categories");
        dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: response.data })
    }
    catch (error) {
        dispatch({ type: "FETCH_CATEGORIES_FAILURE", payload: error })
    }
}

export const createUser = user => (dispatch, getState) => {
    dispatch({ type: "CREATE_NEW_USER_REQUEST" })
    createUserCall(user)
        .then(res => dispatch({ type: "CREATE_NEW_USER_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: "CREATE_NEW_USER_FAILURE", payload: e }))
}
export const createUser_Type = (user_typeID) => (dispatch, getState) => {
    dispatch({ type: "CREATE_NEW_USER_TYPE_REQUEST" })
    createUser_TypeCall(user_typeID)
        .then(res => dispatch({ type: "CREATE_NEW_USER_TYPE_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: "CREATE_NEW_USER_TYPE_FAILURE", payload: e }))
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

export const updateUser = (userID) => (dispatch, getState) => {
    dispatch({ type: "UPDATE_USER_REQUEST" })
    updateUserCall(userID, getState().user.user.data.token)
        .then(res => dispatch({ type: "UPDATE_USER_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: "UPDATE_USER_FAILURE", payload: e }))
}

export const updateUser_Type = (usertypeID) => (dispatch, getState) => {
    dispatch({ type: "UPDATE_USER_TYPE_REQUEST" })
    updateUser_TypeCall(usertypeID)
        .then(res => dispatch({ type: "UPDATE_USER_TYPE_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: "UPDATE_USER_TYPE_FAILURE", payload: e }))


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
export const login = (user) => (dispatch, getState) => {
    dispatch({ type: "LOGIN_REQUEST" })
    LoginCall(user)
        .then(res => dispatch({ type: "LOGIN_SUCCESS", payload: res }))
        .catch(e => dispatch({ type: "LOGIN_FAILURE", payload: e }))
}


