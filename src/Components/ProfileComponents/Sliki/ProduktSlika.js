import { AiOutlineDelete } from "react-icons/ai"
import { STATIC_URL } from "../../../Redux/constants"


export const ProduktSlika = ({
    slika
}) => {
    
    console.log(STATIC_URL+slika.path)

    return (
        <div className="relative flex items-center bg-slate-600 shadow-md hover:opacity-[0.8]">
            <img className="w-full" src={STATIC_URL + slika.path} />
            <div className="absolute flex flex-col justify-center items-center right-50 opacity-0 hover:opacity-100  w-full h-full z-10">
                <AiOutlineDelete  color="white" className="opacity-100" size={50}/>
                <h1 className="font-poppins text-white font-bold">delete</h1>
            </div>

        </div>
    )
}