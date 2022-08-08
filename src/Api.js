export const getUsers = async (id = null) => {
    const append = id === null ? " " : "?id=" + id
    const res = await fetch("http://127.0.0.1:5000/users")
    const data = await res.json()
    return data
}
export const login = async user => {
    const requestOptions = {
        "method": "POST",
        "body": user
    }
    const res = await fetch("http://127.0.0.1:5000/login", requestOptions)
    if (res.status >= 400) throw res.json()
    const data = await res.json()
    return data
}

export const fetchAllusers = async (token) => {
    const requestOptions = {
        "method": "GET",
        "Authorization" : "Bearer " + token
    }
    const res = await fetch("http://127.0.0.1:5000/users", requestOptions)
    if (res.status >= 400) throw res.json()
    const data = await res.json()
    return data
}

export const createUser = async (user , token) => {
    const requestOptions = {
        "method": "POST",
        "body": user,
        "Authorization" : "Bearer " + token
    }
    const res = await fetch("http://127.0.0.1:5000/users", requestOptions)
    if (res.status >= 400) throw res.json()
    const data = await res.json()
    return data
}

export const updateUser = async (user, token) => {
    const requestOptions = {
        "method": "PUT",
        "body": user,
        "Authorization" : "Bearer " + token
    }
    const res = await fetch("http://127.0.0.1:5000/users", requestOptions)
    if (res.status >= 400) throw res.json()
    const data = await res.json()
    return data
}

export const getUser_Types = async (id = null) => {
    const append = id === null ? " " : "?id=" + id
    const res = await fetch("http://127.0.0.1:5000/user_types")
    const data = await res.json()
    return data
}

export const createUser_Type = async user_type => {
    const requestOptions = {
        "method": "POST",
        "body": user_type
    }
    const res = await fetch("http://127.0.0.1:5000/user_types", requestOptions)
    const data = await res.json()
    return data
}


export const updateUser_Type = async user_type => {
    const requestOptions = {
        "method": "PUT",
        "body": user_type
    }
    const res = await fetch("http://127.0.0.1:5000/user_types", requestOptions)
    if (res.status >= 400) throw res.json()
    const data = await res.json()
    return data
}

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