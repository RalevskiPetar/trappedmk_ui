const InitialState = {
    order: {
        data: [],
        createStatus: "",
        createMessage: "",
        updateStatus: "idle",
        updateMessage: "",
        loadStatus: "idle",
        loadMessage: ""
    },
    order_status: {
        data: [],
        createStatus: "",
        createMessage: " ",
        loadStatus: "idle",
        loadMessage: " ",

    },
    wishlist: {
        data: [],
        createStatus: "",
        createMessage: "",
        loadStatus: "",
        loadMessage: "",
        deleteStatus: "",
        deleteMessage: ""
    },
    cart: {
        data: [],
        createOrderStatus: "",
        createOrderMessage: "",
        createStatus: "",
        createMessage: "",
        loadStatus: "",
        loadMessage: "",
        updateStatus: "",
        updateMessage: "",
        deleteStatus: "",
        deleteMessage: ""
    }
}

export const Order_Reducer = (state = InitialState, action) => {
    switch (action.type) {
        case "FETCH_ORDERS_REQUEST":
            return {
                ...state,
                order: {
                    ...state.order,
                    createStatus: "Pending ..",
                    createMessage: "Loading ..Please wait!"
                }

            }
        case "FETCH_ORDERS_SUCCESS":
            return {
                ...state,
                order: {
                    createStatus: "Success",
                    createMessage: " ",
                    data: action.payload.AllOrders
                }

            }
        case "FETCH_ORDERS_FAILURE":
            return {
                ...state,
                order: {
                    ...state.order,
                    createStatus: "Fail",
                    createMessage: action.payload
                }
            }
        case "CREATE_ORDER_REQUEST":
            return {
                ...state,
                order: {
                    ...state.order,
                    createStatus: "Wait..",
                    createMessage: "Please wait.."
                }

            }
        case "CREATE_ORDER_SUCCESS":
            return {
                ...state,
                order: {
                    ...state.order,
                    createStatus: "Success",
                    createMessage: " ",
                    data: [...state.order.data, action.payload.Order]
                }

            }
        case "CREATE_ORDER_FAILURE":
            return {
                ...state,
                order: {
                    ...state.order,
                    createStatus: "Fail",
                    createMessage: action.payload
                }

            }
        case "UPDATE_ORDER_REQUEST":
            return {
                ...state,
                order: {
                    ...state.order,
                    createStatus: "Wait..",
                    createMessage: "Please wait.."
                }

            }
        case "UPDATE_ORDER_SUCCESS":
            console.log(action.payload)
            return {
                ...state,
                order: {
                    ...state.order,
                    data: [
                        ...state.order.data.filter(order => order.id !== action.payload.order.id),
                        action.payload.order
                    ],
                    updateStatus: "success",
                    updateMessage: "Order has been updated",
                }
            }
        case "UPDATE_ORDER_FAILURE":
            return {
                ...state,
                createStatus: "Fail",
                createMessage: action.payload

            }

        case "FETCH_ORDER_STATUSES_REQUEST":
            return {
                ...state,
                order_status: {
                    ...state.order_status,
                    createStatus: "Pending",
                    createMessage: "Please wait.."
                }
            }
        case "FETCH_ORDER_STATUSES_SUCCESS":
            return {
                ...state,
                order_status: {
                    createStatus: "Success",
                    createMessage: "",
                    data: action.payload
                }
            }
        case "FETCH_ORDER_STATUSES_FAILURE":
            return {
                ...state,
                order_status: {
                    ...state.order_status,
                    createStatus: "Fail",
                    createMessage: action.payload
                }
            }


        case "ORDER_FROM_CART_REQUEST":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    createOrderStatus: "pending",
                    createOrderMessage: "Creating order... Please wait."
                }
            }
        case "ORDER_FROM_CART_SUCCESS":
            return {
                ...state,
                order: {
                    ...state.order,
                    data: [...state.order.data, ...action.payload.orders]
                },
                cart: {
                    ...state.cart,
                    data: [...state.cart.data.filter(cart_item => action.payload.removed_cart_items.includes(cart_item.id) === false)],
                    createOrderStatus: "success",
                    createOrderMessage: "Order created successfully."
                }
            }
        case "ORDER_FROM_CART_REQUEST":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    createOrderStatus: "error",
                    createOrderMessage: "Error creating your order."
                }
            }

        case "CREATE_CART_REQUEST":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    createStatus: "pending",
                    createMessage: "Adding item to cart..",
                }
            }
        case "CREATE_CART_SUCCESS":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    createStatus: "success",
                    createMessage: "Item added to cart",
                    data: [...state.cart.data, action.payload.item]
                }
            }
        case "CREATE_CART_FAILURE":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    createStatus: "error",
                    createMessage: "Error adding item to cart"
                }
            }
        case "LOAD_CART_REQUEST":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    loadStatus: "pending",
                    loadMessage: "Loading cart items... Please wait."
                }
            }
        case "LOAD_CART_SUCCESS":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    loadStatus: "success",
                    loadMessage: "Items loaded successfully.",
                    data: action.payload.items
                }
            }
        case "LOAD_CART_FAILURE":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    loadStatus: "error",
                    loadMessage: "Error loading cart items."
                }
            }
        case "UPDATE_CART_REQUEST":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    updateStatus: "pending",
                    updateMessage: "Updating cart item... Please wait.",
                }
            }
        case "UPDATE_CART_SUCCESS":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    updateStatus: "success",
                    updateMessage: "Cart item updated successfully.",
                    data: [
                        ...state.cart.data.filter(i => i.id !== action.payload.item.id),
                        action.payload.item
                    ]
                }
            }
        case "UPDATE_CART_FAILURE":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    updateStatus: "error",
                    updateMessage: "Error updating cart item."
                }
            }
        case "DELETE_CART_REQUEST":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    deleteStatus: "pending",
                    deleteMessage: "Deleting item from cart"
                }
            }
        case "DELETE_CART_SUCCESS":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    deleteStatus: "success",
                    deleteMessage: "Item deleted from cart.",
                    data: [...state.cart.data.filter(i => i.id !== action.payload.deleted_id)]
                }
            }
        case "DELETE_CART_FAILURE":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    deleteStatus: "error",
                    deleteMessage: "Error deleting item from cart"
                }
            }

        case "CREATE_WISHLIST_REQUEST":
            return {
                ...state,
                wishlist: {
                    ...state.wishlist,
                    createStatus: "pending",
                    createMessage: "Adding item to wishlist... Please wait"
                }
            }
        case "CREATE_WISHLIST_SUCCESS":
            return {
                ...state,
                wishlist: {
                    ...state.wishlist,
                    createStatus: "success",
                    createMessage: "Item added to wishlist. ",
                    data: [...state.wishlist.data, action.payload.item]
                }
            }
        case "CREATE_WISHLIST_FAILURE":
            return {
                ...state,
                wishlist: {
                    ...state.wishlist,
                    createStatus: "error",
                    createMessage: "Error adding item to wishilst"
                }
            }
        case "LOAD_WISHLIST_REQUEST":
            return {
                ...state,
                wishlist: {
                    ...state.wishlist,
                    loadStatus: "pending",
                    loadMessage: "Loading wishlist items... Please wait."
                }
            }
        case "LOAD_WISHLIST_SUCCESS":
            return {
                ...state,
                wishlist: {
                    ...state.wishlist,
                    loadStatus: "success",
                    loadMessage: "Wishlist items loaded successfully.",
                    data: action.payload.items
                }
            }
        case "LOAD_WISHLIST_FAILURE":
            return {
                ...state,
                wishlist: {
                    ...state.wishlist,
                    loadStatus: "error",
                    loadMessage: "Error loading wishlist items."
                }
            }
        case "DELETE_WISHLIST_REQUEST":
            return {
                ...state,
                wishlist: {
                    ...state.wishlist,
                    deleteStatus: "pending",
                    deleteMessage: "Deleting item from wishlist... Pleae wait"
                }
            }
        case "DELETE_WISHLIST_SUCCESS":
            return {
                ...state,
                wishlist: {
                    ...state.wishlist,
                    deleteStatus: "success",
                    deleteMessage: "Item deleted from wishist.",
                    data: [...state.wishlist.data.filter(i => i.id !== action.payload.deleted_id)]
                }
            }
        case "DELETE_WISHLIST_FAILURE":
            return {
                ...state,
                wishlist: {
                    ...state.wishlist,
                    deleteStatus: "error",
                    deleteMessage: "Error while deleting item from wishist."
                }
            }
        default:
            return state

    }
}