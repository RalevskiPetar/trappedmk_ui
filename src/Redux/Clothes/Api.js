import { API_URL } from "../constants"

export const getClothes = async (id = null) => {
    const append = id === null ? " " : "?id=" + id
    const res = await fetch(API_URL + "/clothes")
    const data = await res.json()
    return data
}

export const createClothes = async clothes => {
    const requestOptions = {
        "method": "POST",
        "body": clothes
    }
    const res = await fetch(API_URL + "/clothes", requestOptions)
    const data = await res.json()
    return data
}

export const updateClothes = async clothes => {
    const requestOptions = {
        "method": "PUT",
        "body": clothes
    }
    const res = await fetch(API_URL + "/clothes", requestOptions)
    if (res.status >= 400) throw res.json()
    const data = await res.json()
    return data
}

export const getCategories = async (id = null) => {
    const append = id === null ? " " : "?id=" + id
    const res = await fetch(API_URL + "/categories")
    const data = await res.json()
    return data
}

export const createCategory = async category => {
    const requestOptions = {
        "method": "POST",
        "body": category
    }
    const res = await fetch(API_URL + "/categories", requestOptions)
    const data = await res.json()
    return data
}

export const updateCategories = async category => {
    const requestOptions = {
        "method": "PUT",
        "body": category
    }
    const res = await fetch(API_URL + "/categories", requestOptions)
    if (res.status >= 400) throw res.json()
    const data = await res.json()
    return data
}

export const ImagesAPI = {
    "create": async (iamges, token) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        const requestOptions = {
            "method": "POST", "body": iamges, headers: myHeaders
        }
        const res = await fetch(API_URL + "/product_images", requestOptions)
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
        const res = await fetch(API_URL + "/product_images", requestOptions)
        if (res.status >= 400) {
            const e = await res.json()
            throw e
        }
        const data = await res.json()
        return data
    },
    "update": async (iamge, token) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        const requestOptions = {
            "method": "PUT", "body": iamge, headers: myHeaders
        }
        const res = await fetch(API_URL + "/product_images", requestOptions)
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
        const res = await fetch(API_URL + "/product_images?id=" + id, requestOptions)
        if (res.status >= 400) {
            const e = await res.json()
            throw e
        }
        const data = await res.json()
        return data
    },
}