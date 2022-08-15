const InitialState = {
    user: {
        data: {
            user: null,
            token: null,
            users: []
        },
        logout: false,
        createStatus: "idle",
        createMessage: "",
        loadStatus: "idle",
        loadMessage: "",
        updateStatus: "idle",
        updateMessage: "",
    },
    user_type: {
        data: [],
        createStatus: "idle",
        createMessage: "",
        loadStatus: "idle",
        loadMessage: "",
        updateStatus: "idle",
        updateMessage: "",
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