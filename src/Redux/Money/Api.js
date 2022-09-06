export const get_Money_Tracker = async (id = null) => {
    const append = id === null ? " " : "?id=" + id
    const res = await fetch("http://127.0.0.1:5000/money_tracker_all")
    const data = res.json()
    return data
}

export const create_Money = async money_tracker => {
    const requestOptions = {
        "method" : "POST",
        "body" : money_tracker
    }
    const res = await fetch("http://127.0.0.1:5000/money_tracker_all" , requestOptions)
    const data = res.json()
    return data
}

export const update_Money = async money_tracker => {
    const requestOptions = {
        "method" : "PUT",
        "body" : money_tracker
    }
    const res = await fetch("http://127.0.0.1:5000/money_tracker_all" , requestOptions)
    if (res.status >= 400) throw res.json()
    const data = res.json()
    return data
}