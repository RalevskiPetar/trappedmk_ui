const InitialState = {
    store : {
        data: [],
        createStatus: " ",
        createMessage: " ",
        loadStatus: " ",
        loadMessage: " ",
    }
}

export const Store_Reducer = (state = InitialState , action) => {
        switch(action.type) {
            case "FETCH_STORE_REQUEST":
                return {
                    ...state,
                    store : {
                        ...state.store,
                        createStatus : "Pending",
                        createMessage : "Please wait ..."
                    }

                }
            case "FETCH_STORE_SUCCESS":
                return {
                    ...state,
                    store : {
                        createStatus: "Success",
                        createMessage: " ",
                        data: action.payload
                    }
                        
                }
            case "FETCH_STORE_FAILURE":
                return {
                    ...state,
                    store: {
                        ...state.store,
                        createStatus: "Fail",
                        createMessage: action.payload,
                    }
                }
            case "CREATE_STORE_REQUEST":
                return {
                    ...state,
                    store: {
                        ...state.store,
                        createMessage: "Pending",
                        createStatus: "Please wait.."
                    }
                }
            case "CREATE_STORE_SUCCESS":
                return {
                    ...state, 
                    store : {
                        ...state.store,
                        createStatus: "Success",
                        createMessage: " ",
                        data: [...state.store.data , action.payload.store ]
                    }
                }
            case "CREATE_STORE_FAILURE":
                return {
                    ...state,
                    store: {
                        ...state.store,
                        createStatus: "Fail",
                        createMessage: action.payload
                    }
                                
                } 
                default:
                    return state                
            }                           
        }
