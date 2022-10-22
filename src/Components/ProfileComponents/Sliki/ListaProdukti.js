import { ProductCard } from "./ProductCard"


export const ListaProdukti = ({
    clothesReducer,
    setClicked,
    clicked,
    search,
}) => {

    const filteredClothes = clothesReducer.clothes.data.filter((c) => {
        if (search === '') {
            return c.name
        }
        else {
            return c.name.toString().toLowerCase().includes(search)
        }
    })

    return (
        <div className="w-full grid gap-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {filteredClothes.map(prod => <ProductCard 
                clothesReducer={clothesReducer}
                setClicked={setClicked}
                product={prod}
            />)}
        </div>
    )
}