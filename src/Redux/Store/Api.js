import { API_URL } from "../constants"

export const get_Store = async (id = null) => {
    const append = id === null ? " " : "?id=" + id
    const res = await fetch(API_URL+"/product_stores")
    const data = res.json()
    return data
}

export const create_Store = async store => {
    const requestOptions = {
        "method" : "POST",
        "body" : store
    }
    const res = await fetch(API_URL+"/product_stores" , requestOptions)
    const data = res.json()
    return data
}