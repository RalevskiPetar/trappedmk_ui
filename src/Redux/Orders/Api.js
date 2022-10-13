import { API_URL } from "../constants"

export const get_Orders = async (id = null) => {
    const append = id === null ? "  " : "?id=" + id
    const res = await fetch(API_URL + "/orders")
    const data = res.json()
    return data
}

export const create_Order = async order => {
    const requestOptions = {
        "method": "POST",
        "body": order
    }
    const res = await fetch(API_URL + "/orders", requestOptions)
    const data = res.json()
    return data
}

export const update_Order = async order => {
    const requestOptions = {
        "method": "PUT",
        "body": order
    }
    const res = await fetch(API_URL + "/orders", requestOptions)
    const data = await res.json()
    console.log(data)
    return data
}

export const get_Order_Statuses = async (id = null) => {
    const append = id === null ? " " : "?id=" + id
    const res = await fetch(API_URL + "/order_statuses")
    const data = res.json()
    return data
}


export const cartApi = {
    "create": async (cart, token) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        const requestOptions = {
            "method": "POST", "body": cart, headers: myHeaders
        }
        const res = await fetch(API_URL + "/cart", requestOptions)
        if (res.status >= 400) {
            const e = await res.json()
            throw e
        }
        const data = await res.json()
        return data
    },
    "read": async token => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        const requestOptions = {
            "method": "GET", headers: myHeaders
        }
        const res = await fetch(API_URL + "/cart", requestOptions)
        if (res.status >= 400) {
            const e = await res.json()
            throw e
        }
        const data = await res.json()
        return data
    },
    "update": async (cart, token) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        const requestOptions = {
            "method": "PUT", "body": cart, headers: myHeaders
        }
        const res = await fetch(API_URL + "/cart", requestOptions)
        if (res.status >= 400) {
            const e = await res.json()
            throw e
        }
        const data = await res.json()
        return data
    },
    "delete": async (id, token) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        const requestOptions = {
            "method": "DELETE", headers: myHeaders
        }
        const res = await fetch(API_URL + "/cart?id="+id, requestOptions)
        if (res.status >= 400) {
            const e = await res.json()
            throw e
        }
        const data = await res.json()
        return data
    },
}

export const wishlistApi = {
    "create": async (wishlist, token) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        const requestOptions = {
            "method": "POST", "body": wishlist, headers: myHeaders
        }
        const res = await fetch(API_URL + "/wishlistcart", requestOptions)
        if (res.status >= 400) {
            const e = await res.json()
            throw e
        }
        const data = await res.json()
        return data
    },
    "read": async (token) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        const requestOptions = {
            "method": "GET", headers: myHeaders
        }
        const res = await fetch(API_URL + "/wishlist", requestOptions)
        if (res.status >= 400) {
            const e = await res.json()
            throw e
        }
        const data = await res.json()
        return data
    },
    "delete": async (id, token) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        const requestOptions = {
            "method": "DELETE", headers: myHeaders
        }
        const res = await fetch(API_URL + "/wishlist?id="+id, requestOptions)
        if (res.status >= 400) {
            const e = await res.json()
            throw e
        }
        const data = await res.json()
        return data
    },
}