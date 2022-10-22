import { STATIC_URL } from "../../../Redux/constants"


export const ProduktSlika = ({
    slika
}) => {
    
    console.log(slika)

    return (
        <div className="flex items-center bg-slate-600 shadow-md">
            <img className="w-full" src={STATIC_URL + slika.path} />
        </div>
    )
}