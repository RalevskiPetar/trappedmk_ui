const sizes = ["S", "M", "L", "XL"]

const CheckoutItem = ({
    item,
    storeReducer,
    clothesReducer
}) => {

    const current_store = storeReducer.data.stores.find(s => s.id === item.store_id)
    const product = clothesReducer.data.find(prod => prod.id === current_store.product_id)

    return (
        <div className="flex items-center justify-between pt-2">
            <p className="text-base leading-none text-gray-800"><b>{product.name} {sizes[current_store.size - 1]}</b> ({item.quantity})</p>
            <p className="text-base leading-none text-gray-800">{product.price * item.quantity}</p>
        </div>
    )
}


export default CheckoutItem