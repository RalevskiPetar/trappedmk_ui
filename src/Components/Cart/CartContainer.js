import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { fetchClothes } from "../../Redux/Clothes/Actions"
import { CartActions } from "../../Redux/Orders/Actions"
import { fetch_Store } from "../../Redux/Store/Actions"
import DoubleBubble from "../BarLoader"
import Header from "../Header"
import CartProduct from "./CartProduct"
import Checkout from "./Checkout"
import Footer from "../../Footer"

const CartContainer = ({ }) => {
    const dispatch = useDispatch()
    const cartReducer = useSelector(state => state.orders.cart)
    const storeReducer = useSelector(state => state.store.store)
    const clothesReducer = useSelector(state => state.clothes.clothes)
    const userReducer = useSelector(state => state.user.user)
    const [selected, setSelected] = useState([])

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
            <div className="w-full h-full top-0 overflow-y-auto overflow-x-hidden sticky-0" id="chec-div">
                <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">
                        <div className="lg:w-2/3 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white overflow-y-auto overflow-x-hidden lg:h-screen h-auto" id="scroll">
                            <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 pt-3">Кошничка</p>
                            {user_cart_items.length === 0 ? <Fragment>
                                <p className="text-lg text-slate-800 leading-10">Вашата кошничка е празна.</p>
                                <NavLink className="bg-slate-800 text-white p-4 w-full block text-center" to="/siteproizvodi">Назад во продавница</NavLink>
                            </Fragment>
                                : user_cart_items.map(cart => <CartProduct
                                    key={cart.id}
                                    selected={selected}
                                    setSelected={setSelected}
                                    cart_item={cart}
                                    storeReducer={storeReducer}
                                    clothesReducer={clothesReducer}
                                />)}
                        </div>
                        <Checkout
                            selected={selected}
                            setSelected={setSelected}
                            items={user_cart_items}
                            cartReducer={cartReducer}
                            storeReducer={storeReducer}
                            clothesReducer={clothesReducer}
                        />
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}

export default CartContainer