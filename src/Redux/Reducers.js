const InitialState = {
    user: {
        data: {
            user: null,
            token: null,
            users: []
        },
        logout: false,
        createStatus: " ",
        createMessage: " ",
        loadStatus: "idle",
        loadMessage: " "
    },
    user_type: {
        data: [],
        createStatus: " ",
        createMessage: " ",
        loadStatus: "idle",
        loadMessage: " "

    }
}

const InitialStateDva = {
    clothes: {
        data: [],
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

export const UserReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "LOGOUT":
            return {
                ...state, 
                user: {
                    ...state.user,
                    logout: true
                }
            }
        case "FETCH_USERS_REQUEST":
            return {
                ...state,
                user: {
                    ...state.user,
                    loadStatus: "pending",
                    loadMessage: "Loading users... Please wait."
                }
            };
        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                user: {
                    loadStatus: "Success",
                    loadMessage: "",
                    data: {
                        ...state.user.data,
                        users: action.payload.allUsers
                    },
                }


            };
        case "FETCH_USERS_FAILURE":
            return {
                ...state,
                user: {
                    loadStatus: "Fail",
                    loadMessage: action.payload,
                }

            };
            //
            case "LOGIN_REQUEST":
                return {
                    ...state,
                    user: {
                        ...state.user,
                        createStatus: "pending",
                        createMessage: "Loading user... Please wait."
                    }
                };
            case "LOGIN_SUCCESS":
                return {
                    ...state,
                    user: {
                        createStatus: "Success",
                        createMessage: "",
                        logout: false,
                        data: {
                            ...state.user.data,
                            ...action.payload
                        },
                    }
    
    
                };
            case "LOGIN_FAILURE":
                return {
                    ...state,
                    user: {
                        createStatus: "Fail",
                        createMessage: action.payload,
                    }
    
                };
            //

        case "FETCH_USER_TYPES_REQUEST":
            return {
                ...state,
                user_type: {
                    ...state.user_type,
                    createStatus: "pending",
                    createMessage: "Loading user types... Please wait."
                }

            };
        case "FETCH_USER_TYPES_SUCCESS":
            return {
                ...state,
                user_type: {
                    createStatus: "Success",
                    createMessage: "",
                    data: action.payload,
                }
            };
        case "FETCH_USER_TYPES_FAILURE":
            return {
                ...state,
                user_type: {
                    createStatus: "Fail",
                    createMessage: action.payload,
                }
            };
        case "CREATE_NEW_USER_REQUEST":
            return {
                ...state,
                user: {
                    ...state.user,
                    createStatus: "Pending",
                    createMessage: "Loading new user .... please wait!"
                }
            };
        case "CREATE_NEW_USER_SUCCESS":
            return {
                ...state,
                user: {
                    ...state.user,
                    createStatus: "Success",
                    createMessage: "User created..",
                   data: {
                    ...state.user.data,
                    users: [...state.user.data.users, action.payload.user]
                   }
                }

            };
        case "CREATE_NEW_USER_FAILURE":
            return {
                ...state,
                user: {
                    createStatus: "Fail",
                    createMessage: action.payload
                }

            };
        case "UPDATE_USER_REQUEST":
            return {
                ...state,
                user: {
                    ...state.user,
                    updateStatus: "Pending",
                    updateMessage: "Loading user ... please wait!"
                }
            };
        case "UPDATE_USER_SUCCESS":
            let new_user = state.user.data.user
            if (action.payload.user.id === state.user.data.user.id) new_user = action.payload.user 
            return {
                ...state,
                user: {
                    ...state.user,
                    updateStatus: "Success",
                    updateMessage: "Updating user ... please wait!",
                    data: {
                        ...state.user.data,
                        user: new_user,
                        users: [...state.user.data.users.filter(u => u.id !== action.payload.user.id), action.payload.user]
                    }
                }

            };
        case "UPDATE_USER_FAILURE":
            return {
                ...state,
                user: {
                    createStatus: "Fail",
                    createMessage: action.payload
                }
            };
        case "CREATE_NEW_USER_TYPE_REQUEST":
            return {
                ...state,
                user_type: {
                    ...state.user_type,
                    createStatus: "Pending",
                    createMessage: "Please wait.."
                }
            };
        case "CREATE_NEW_USER_TYPE_SUCCESS":
            return {
                ...state,
                user_type: {
                    ...state.user_type,
                    createStatus: "Success",
                    createMessage: "User type created..",
                    data: [...state.user_type.data, action.payload.user_type]
                }
            };
        case "CREATE_NEW_USER_TYPE_FAILURE":
            return {
                ...state,
                user_type: {
                    ...state.user_type,
                    createStatus: "error",
                    createMessage: action.payload
                }
            };
        case "UPDATE_USER_TYPE_REQUEST":
            return {
                ...state,
                user_type: {
                    ...state.user_type,
                    updateStatus: "Pending",
                    updateMessage: "Please wait.."
                }

            };
        case "UPDATE_USER_TYPE_SUCCESS":
            return {
                ...state,
                user_type: {
                    ...state.user_type,
                    updateStatus: "Success",
                    updateMessage: "User type updated",
                    data: [...state.user_type.data.filter(ut => ut.id != action.payload.id), action.payload.user_type]
                }
            };
        case "UPDATE_USER_TYPE_FAILURE":
            return {
                ...state,
                user_type: {
                    ...state.user_type,
                    updateStatus: "Fail",
                    updateMessage: action.payload
                }
            };

        default:
            return state
    }

}

export const ClothesReducer = (state = InitialStateDva, action) => {

    switch (action.type) {
        case "FETCH_CLOTHES_REQUEST":
            return {
                ...state,
                clothes: {
                    ...state.clothes,
                    createStatus: "pending",
                    createMessage: "Loading clothes .... please wait!"

                }
            };
        case "FETCH_CLOTHES_SUCCESS":
            return {
                ...state,
                clothes: {
                    createStatus: "Success",
                    createMessage: " ",
                    data: action.payload

                }

            };
        case "FETCH_CLOTHES_FAILURE":
            return {
                ...state,
                clothes: {
                    createStatus: "Fail",
                    createMessage: action.payload
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
            return {
                ...state,
                clothes: {
                    ...state.clothes,
                    createStatus : "Success" ,
                    createMessage: "..." ,
                    data: [...state.clothes.data, action.payload.clothes]
                }
            };
        case "CREATE_NEW_PRODUCT_FAILURE":
            return {
                ...state,
                clothes: {
                    createStatus: "Fail",
                    createMessage: action.payload
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
