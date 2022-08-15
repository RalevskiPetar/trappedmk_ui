export const getClothes = async (id = null) => {
    const append = id === null ? " " : "?id=" + id
    const res = await fetch("http://127.0.0.1:5000/clothes")
    const data = await res.json()
    return data
}

export const createClothes = async clothes => {
    const requestOptions = {
        "method": "POST",
        "body": clothes
    }
    const res = await fetch("http://127.0.0.1:5000/clothes", requestOptions)
    const data = await res.json()
    return data
}

export const updateClothes = async clothes => {
    const requestOptions = {
        "method": "PUT",
        "body": clothes
    }
    const res = await fetch("http://127.0.0.1:5000/clothes", requestOptions)
    if (res.status >= 400) throw res.json()
    const data = await res.json()
    return data
}

export const getCategories = async (id = null) => {
    const append = id === null ? " " : "?id=" + id
    const res = await fetch("http://127.0.0.1:5000/categories")
    const data = await res.json()
    return data
}

export const createCategory = async category => {
    const requestOptions = {
        "method": "POST",
        "body": category
    }
    const res = await fetch("http://127.0.0.1:5000/categories", requestOptions)
    const data = await res.json()
    return data
}

export const updateCategories = async category => {
    const requestOptions = {
        "method": "PUT",
        "body": category
    }
    const res = await fetch("http://127.0.0.1:5000/categories", requestOptions)
    if (res.status >= 400) throw res.json()
    const data = await res.json()
    return data
}