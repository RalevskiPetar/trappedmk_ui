export const get_Store = async (id = null) => {
    const append = id === null ? " " : "?id=" + id
    const res = await fetch("http://127.0.0.1:5000/product_stores")
    const data = res.json()
    return data
}

export const create_Store = async store => {
    const requestOptions = {
        "method" : "POST",
        "body" : store
    }
    const res = await fetch("http://127.0.0.1:5000/product_stores" , requestOptions)
    const data = res.json()
    return data
}