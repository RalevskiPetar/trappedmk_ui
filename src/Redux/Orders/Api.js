import { API_URL } from "../constants"

export const get_Orders = async (id = null) => {
    const append = id === null ? "  " : "?id=" + id
    const res = await fetch(API_URL+"/orders")
    const data = res.json()
    return data
}

export const create_Order = async order => {
    const requestOptions = {
        "method" : "POST",
        "body" : order
    }
    const res = await fetch(API_URL+"/orders" , requestOptions)
    const data = res.json()
    return data
}

export const update_Order = async order => {
    const requestOptions = {
        "method" : "PUT",
        "body" : order
    }
    const res = await fetch(API_URL+"/orders" , requestOptions)
    const data = await res.json()
    console.log(data)
    return data
}

export const get_Order_Statuses = async (id = null) => {
    const append = id === null ? " " : "?id=" + id
    const res = await fetch(API_URL+"/order_statuses")
    const data = res.json()
    return data
}