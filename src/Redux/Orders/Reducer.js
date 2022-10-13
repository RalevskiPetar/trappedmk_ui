const InitialState = {
    order : {
        data : [],
        createStatus : "",
        createMessage : "",
        updateStatus : "idle",
        updateMessage : "",
        loadStatus : "idle",
        loadMessage : ""
    },
    order_status : {
        data : [],
        createStatus : "" ,
        createMessage : " ",
        loadStatus : "idle",
        loadMessage : " ",

    }
}

export const Order_Reducer = ( state = InitialState , action) => {
    switch(action.type) {
        case "FETCH_ORDERS_REQUEST":
            return {
                ...state,
                order: {
                    ...state.order,
                    createStatus : "Pending ..",
                    createMessage : "Loading ..Please wait!"
                }

            }
        case "FETCH_ORDERS_SUCCESS":
            return {
                ...state,
                order : {
                    createStatus : "Success",
                    createMessage : " ",
                    data: action.payload.AllOrders
                }
                    
            }
        case "FETCH_ORDERS_FAILURE":
            return {
                ...state,
                order : {
                    ...state.order,
                    createStatus : "Fail",
                    createMessage : action.payload
                }
            }
        case "CREATE_ORDER_REQUEST":
            return {
                ...state,
                order : {
                    ...state.order,
                    createStatus : "Wait..",
                    createMessage : "Please wait.."
                }
                
            }
        case "CREATE_ORDER_SUCCESS":
            return {
                ...state,
                order : {
                    ...state.order,
                    createStatus : "Success",
                    createMessage : " ",
                    data : [...state.order.data ,action.payload.Order]
                }
                
            }
        case "CREATE_ORDER_FAILURE":
            return {
                ...state,
                order : { 
                    ...state.order,
                    createStatus : "Fail",
                    createMessage : action.payload
                }
                
            }
        case "UPDATE_ORDER_REQUEST": 
            return {
                ...state,
                order : {
                    ...state.order ,
                    createStatus : "Wait..",
                    createMessage : "Please wait.."
                }

            }
        case "UPDATE_ORDER_SUCCESS":
            console.log(action.payload)
            return {
                ...state,
                order : {
                    ...state.order,
                    data : [
                        ...state.order.data.filter(order => order.id !== action.payload.order.id), 
                        action.payload.order
                    ],
                    updateStatus : "success",
                    updateMessage : "Order has been updated",
                }
            }   
        case "UPDATE_ORDER_FAILURE":
            return {
                ...state,
                createStatus : "Fail",
                createMessage : action.payload

            }       

        case "FETCH_ORDER_STATUSES_REQUEST" :
            return {
                ...state,
                order_status : {
                    ...state.order_status,
                    createStatus : "Pending",
                    createMessage : "Please wait.."
                }
            }
        case "FETCH_ORDER_STATUSES_SUCCESS" :
            return {
                ...state,
                order_status : {
                    createStatus : "Success",
                    createMessage : "",
                    data : action.payload
                }
            }
        case "FETCH_ORDER_STATUSES_FAILURE": 
            return {
                ...state,
                order_status : {
                    ...state.order_status,
                    createStatus : "Fail",
                    createMessage : action.payload
                }
            }            
        default:
            return state    

    }
}