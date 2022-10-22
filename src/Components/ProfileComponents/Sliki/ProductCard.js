import { STATIC_URL } from "../../../Redux/constants"


export const ProductCard = ({
    clothesReducer,
    product,
    setClicked
}) => {

    let main_picture = clothesReducer.images.data.find(image => image.product_id === product.id)
    if (main_picture === undefined) main_picture = "https://shmector.com/_ph/16/742671537.png"
    else main_picture = STATIC_URL + main_picture.path
    return (
        <div className="col-span-1 flex gap-2 items-center cursor-pointer" onClick={e => setClicked(product)}>
            <img src={main_picture} className="w-[50px]"/>
            <h3>{product.name}</h3>
        </div>
    )
}