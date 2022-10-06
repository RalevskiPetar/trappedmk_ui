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
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    const requestOptions = {
        
        "method": "GET",
        headers: myHeaders,
    } // i ova so headers
    const res = await fetch("http://127.0.0.1:5000/users", requestOptions)
    if (res.status >= 400) {
        const e = await res.json()
        throw e
    } // znachi vo API calls samo ova mu go dodavash na sekoj action
    const data = await res.json()
    return data
}

export const createUser = async (user , token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
        "method": "POST",
        "body": user,
        headers: myHeaders,
    }
    const res = await fetch("http://127.0.0.1:5000/users", requestOptions)
    if (res.status >= 400) throw res.json()
    const data = await res.json()
    return data
}

export const updateUser = async (user, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
        "method": "PUT",
        "body": user,
        headers: myHeaders
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