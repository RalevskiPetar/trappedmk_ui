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
                        loadStatus : "pending",
                        loadMessage : "Please wait ..."
                    }

                }
            case "FETCH_STORE_SUCCESS":
                return {
                    ...state,
                    store : {
                        loadStatus: "Success",
                        loadMessage: " ",
                        data: action.payload
                    }
                        
                }
            case "FETCH_STORE_FAILURE":
                return {
                    ...state,
                    store: {
                        ...state.store,
                        loadStatus: "Fail",
                        loadMessage: action.payload,
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
                if (action.payload.new_store !== undefined) {
                    return {
                        ...state, 
                        store : {
                            ...state.store,
                            createStatus: "Success",
                            createMessage: " ",
                            data: {
                                ...state.store.data,
                                stores: [
                                    ...state.store.data.stores,
                                    action.payload.new_store
                                ]
                            } 
                        }
                    }
                } else {
                    return {
                        ...state, 
                        store : {
                            ...state.store,
                            createStatus: "Success",
                            createMessage: " ",
                            data: {
                                ...state.store.data,
                                stores: [
                                    ...state.store.data.stores.filter(s => s.id !== action.payload.store.id),
                                    action.payload.store
                                ]
                            } 
                        }
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
