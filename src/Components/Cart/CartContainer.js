import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import Footer from "../../Footer"
import { fetchClothes } from "../../Redux/Clothes/Actions"
import { CartActions } from "../../Redux/Orders/Actions"
import { fetch_Store } from "../../Redux/Store/Actions"
import DoubleBubble from "../BarLoader"
import Header from "../Header"
import CartProduct from "./CartProduct"
import Checkout from "./Checkout"

const CartContainer = ({ }) => {
    const dispatch = useDispatch()
    const cartReducer = useSelector(state => state.orders.cart)
    const storeReducer = useSelector(state => state.store.store)
    const clothesReducer = useSelector(state => state.clothes.clothes)
    const userReducer = useSelector(state => state.user.user)

    useEffect(() => {
        dispatch(CartActions.read())
        dispatch(fetchClothes())
        dispatch(fetch_Store())
    }, [])

    if (cartReducer.loadStatus === "pending" ||
        storeReducer.loadStatus === "pending" ||
        clothesReducer.loadStatus === "pending" ||
        cartReducer.deleteStatus === "pending"
    ) return <DoubleBubble speed={1} message="Loading cart items... Please wait." />

    const user_cart_items = cartReducer.data.filter(item => item.user_id === userReducer.data.user.id).sort((a, b) => a.id > b.id ? 1 : -1)

    return (
        <div>
            <Header />
            <div className="w-full h-full top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">
                        <div className="lg:w-1/2 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white overflow-y-auto overflow-x-hidden lg:h-screen h-auto" id="scroll">
                            <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 pt-3">Кошничка</p>
                            {user_cart_items.length === 0 ? <Fragment>
                                <p className="text-lg text-slate-800 leading-10">Вашата кошничка е празна.</p>
                                <NavLink className="bg-slate-800 text-white p-4 w-full block text-center" to="/siteproizvodi">Назад до производи</NavLink>
                            </Fragment>
                                : user_cart_items.map(cart => <CartProduct
                                    cart_item={cart}
                                    storeReducer={storeReducer}
                                    clothesReducer={clothesReducer}
                                />)}
                        </div>
                        {user_cart_items.length === 0 && cartReducer.createOrderStatus === "success" ? <div className="lg:w-96 w-full bg-gray-100 h-full">
                            <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                            </div>
                        </div> : <Checkout
                            items={user_cart_items}
                            cartReducer={cartReducer}
                            storeReducer={storeReducer}
                            clothesReducer={clothesReducer}
                        />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartContainer