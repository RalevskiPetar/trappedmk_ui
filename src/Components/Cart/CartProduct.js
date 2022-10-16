import { useEffect, useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { CartActions } from "../../Redux/Orders/Actions"


const sizes = ["S", "M", "L", "XL"]
const CartProduct = ({
    cart_item,
    selected,
    setSelected,
    storeReducer,
    clothesReducer
}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(cart_item.quantity)

    const current_store = storeReducer.data.stores.find(s => s.id === cart_item.store_id)
    const product = clothesReducer.data.find(prod => prod.id === current_store.product_id)

    useEffect(() => {
        const cleanTimeout = setTimeout(() => {
            const form = new FormData()
            form.append("id", cart_item.id)
            form.append("quantity", quantity)
            dispatch(CartActions.update(form))
        }, 650)

        return () => clearTimeout(cleanTimeout)
    }, [quantity])

    const handleDelete = e => {
        e.preventDefault()
        dispatch(CartActions.delete(cart_item.id))
    }
    const toggleSelected = e => {
        if (selected.includes(cart_item.id)) setSelected(selected.filter(i => i !== cart_item.id))
        else setSelected([...selected, cart_item.id])
    }

    return (
        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
            <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img src="http://localhost:3000/img/bluza.png" alt="Product image" className="h-full object-center object-cover md:block hidden" />
                <img src="http://localhost:3000/img/bluza.png" alt="Product image" className="w-full h-full object-center object-cover md:hidden" />
            </div>
            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full">
                    <p className="text-lg font-black leading-none text-gray-800">{product.name}</p>
                    <div className='flex items-center gap-2'>
                        {quantity == 1 ?
                            <span className='w-4'></span>
                            :
                            <AiOutlineMinus onClick={e => setQuantity(quantity - 1)} />}
                        <h1 className='lg:border-[0.1rem] lg:border-slate-200 lg:p-4 lg:rounded-sm'>{quantity}</h1>
                        <AiOutlinePlus onClick={e => setQuantity(quantity + 1)} />
                    </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">Големина: {sizes[current_store.size - 1]}</p>
                <div className="flex items-center justify-between pt-5">
                    <div>
                        <input type="checkbox" onChange={e => toggleSelected(e)} value={selected.includes(cart_item.id)} />
                        <label className="text-slate-800 ml-4">Додај во нарачка</label>
                    </div>
                    <div className="flex itemms-center">
                        <p onClick={e => handleDelete(e)} className="text-xs leading-3 underline text-red-500 cursor-pointer">Избриши</p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">{product.price} МКД</p>
                </div>
            </div>
        </div>
    )
}


export default CartProduct