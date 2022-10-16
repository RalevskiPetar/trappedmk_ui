import { useState, Fragment } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { orderFromCart } from "../../Redux/Orders/Actions"
import DoubleBubble from "../BarLoader"
import CheckoutItem from "./CheckoutItem"

const getTotal = (items, storeReducer, clothesReducer, selected) => {
    let total = 0

    for (const item of items) {
        if (selected.includes(item.id) === false) continue
        const current_store = storeReducer.data.stores.find(s => s.id === item.store_id)
        const product = clothesReducer.data.find(prod => prod.id === current_store.product_id)
        total += product.price * item.quantity
    }
    return total
}

const Checkout = ({
    items,
    selected,
    setSelected,
    cartReducer,
    storeReducer,
    clothesReducer
}) => {
    const dispatch = useDispatch()
    const [submitted, setSubmitted] = useState(false)

    const handleCreateOrder = e => {
        e.preventDefault()
        const form = new FormData()
        form.append("cart", JSON.stringify(items.filter(i => selected.includes(i.id) === true).map(i => i.id)))
        setSubmitted(true)
        dispatch(orderFromCart(form))
    }

    console.log(items.length)

    return (
        <div className="lg:w-1/3 w-full bg-gray-100 h-full">
            {cartReducer.createOrderStatus === "pending" ? <DoubleBubble speed={1} message="Creating order... Please wait." /> : null}
            <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                    <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 mb-8">Наплата</p>
                    {items.map(i => selected.includes(i.id) ? <CheckoutItem
                        item={i}
                        storeReducer={storeReducer}
                        clothesReducer={clothesReducer}
                    /> : null)}
                    <div className="flex items-center justify-between pt-5">
                        <p className="text-base leading-none text-gray-800"><b>Испорака</b></p>
                        <p className="text-base leading-none text-gray-800">100</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p className="text-2xl leading-normal text-gray-800">Вкупно</p>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">{getTotal(items, storeReducer, clothesReducer, selected) + 100} МКД</p>
                    </div>
                    {submitted === true && cartReducer.createOrderStatus === "success" ?
                        <Fragment>
                            <p className="text-center mb-4 text-lg text-green-700">Успешно извршена нарачка</p>
                            {items.length === 0 ? <NavLink to="/siteproizvodi" className="bg-slate-800 text-white p-4 w-full block text-center">Назад во продавница</NavLink> : <button onClick={e => handleCreateOrder(e)} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">Нарачај</button>}
                        </Fragment> : 
                        items.length === 0 ? null : <button onClick={e => handleCreateOrder(e)} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">Нарачај</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkout