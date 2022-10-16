const InitialState = {
    clothes: {
        data: [], // Ovde na primer imame podatok data sho e deklariran kako niza. //od ovde so vakov initialstate
        createStatus: " ",
        createMessage: " ",
        loadStatus: "idle",
        loadMessage: " "
    },
    categories: {
        data: [], 
        createStatus: " ",
        createMessage: " ",
        loadStatus: "idle",
        loadMessage: " "

    }
}

export const ClothesReducer = (state = InitialState, action) => {

    switch (action.type) {
        case "FETCH_CLOTHES_REQUEST":
            return {
                ...state,
                clothes: {
                    ...state.clothes,
                    loadStatus: "pending",
                    loadMessage: "Loading clothes .... please wait!"

                }
            };
        case "FETCH_CLOTHES_SUCCESS":
            return {
                ...state,
                clothes: {
                    loadStatus: "Success",
                    loadMessage: " ",
                    data: action.payload["All Products"] // Ovde namesto action.payload treba da bidi action.payload["All Clothes"] - ova vo zagradite treba da se sovpagja so to sho go vrakjame od API to
                    // Taka se zapazuva strukturata na redux store
                    // Ama so redux toolkit ke bidi polesno nema da imame spread operators takvi gluposti I USHTE NES

                }

            };
        case "FETCH_CLOTHES_FAILURE":
            return {
                ...state,
                clothes: {
                    loadStatus: "Fail",
                    loadMessage: action.payload
                }

            };
        case "FETCH_CATEGORIES_REQUEST":
            return {
                ...state,
                categories: {
                    ...state.categories,
                    loadStatus: "pending",
                    loadMessage: "Loading categories .... please wait!"

                }

            };
        case "FETCH_CATEGORIES_SUCCESS":
            return {
                ...state,
                categories: {
                    ...state.categories,
                    createStatus: "Success",
                    createMessage: "",
                    data: action.payload.categories
                }

            };
        case "FETCH_CATEGORIES_FAILURE":
            return {
                ...state,
                categories: {
                    createStatus: "Fail",
                    createMessage: action.payload
                }

            };
        case "CREATE_NEW_PRODUCT_REQUEST":
            return {
                ...state,
                clothes: {
                    ...state.clothes ,
                    createStatus: "Pending",
                    createMessage: "Please wait..."
                }
            };
        case "CREATE_NEW_PRODUCT_SUCCESS":
            console.log(action)
            return {
                ...state,
                clothes: {
                    ...state.clothes,
                    createStatus : "Success" ,
                    createMessage: "..." ,
                    data: [
                        ...state.clothes.data,
                        action.payload["Product"]
                        // "All Products" : [...state.clothes.data['All Products'], action.payload["Product"]] 
                        // kako navlegovme tolku pati 
                    ] // zaradi sho na read products gi stavame "All Products" vnatre vo data. Mozhi to da go poprajme vaka da bidi
                }
            
            };
            
        case "CREATE_NEW_PRODUCT_FAILURE":
            return {
                ...state,
                clothes: {
                    createStatus: "Fail",
                    createMessage: action.payload.clothes
                }
            }
        case "UPDATE_PRODUCT_REQUEST":
            return {
                ...state,
                clothes: {
                    loadStatus: "Pending",
                    loadMessage: "Please wait..."
                }
            }
        case "UPDATE_PRODUCT_SUCCESS":
            return {
                ...state,
                clothes: {
                    data: [...state.clothes.data.filter(p => p.id != action.payload.id), action.payload]
                }

            };
        case "UPDATE_PRODUCT_FAILURE":
            return {
                ...state,
                clothes: {
                    createStatus: "Fail",
                    createMessage: action.payload
                }
            }
        case "CREATE_NEW_CATEGORY_REQUEST":
            return {
                ...state,
                categories: {
                    ...state.categories,
                    createStatus: "Pending",
                    createMessage: "Please wait.."
                }

            }
        case "CREATE_NEW_CATEGORY_SUCCESS":
            return {
                ...state,
                categories: {
                    data: [state.categories.data, action.payload.categories]
                }
            };
        case "CREATE_NEW_CATEGORY_FAILURE":
            return {
                ...state,
                categories: {
                    createStatus: "Fail",
                    createMessage: action.payload
                }

            }
        case "UPDATE_CATEGORY_REQUEST":
            return {
                ...state,
                categories: {
                    loadStatus: "Pending",
                    loadMessage: "Please wait.."
                }
            }
        case "UPDATE_CATEGORY_SUCCESS":
            return {
                ...state,
                categories: {
                    data: [state.categories.data.filter(c => c.id != action.payload.id), action.payload]
                }
            };
        case "UPDATE_CATEGORY_FAILURE":
            return {
                ...state,
                categories: {
                    createStatus: "Pending",
                    createMessage: action.payload
                }
            }
        default:
            return state
    }
}
