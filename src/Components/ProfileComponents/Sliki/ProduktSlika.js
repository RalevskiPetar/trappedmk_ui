import { AiOutlineDelete } from "react-icons/ai"
import { STATIC_URL } from "../../../Redux/constants"
import { useDispatch } from "react-redux"
import { ImagesActions } from "../../../Redux/Clothes/Actions"


export const ProduktSlika = ({
    slika
}) => {
    const dispatch = useDispatch()
    
    const handleDelete = e => {
        const data = new FormData()
        data.append("id", slika.id)
        dispatch(ImagesActions.delete(data))
    }

    return (
        <div className="relative flex items-center bg-slate-600 shadow-md hover:opacity-[0.8]">
            <img className="w-full" src={STATIC_URL + slika.path} />
            <div className="absolute flex flex-col justify-center items-center right-50 opacity-0 hover:opacity-100  w-full h-full z-10" onClick={e => handleDelete(e)}>
                <AiOutlineDelete  color="white" className="opacity-100" size={50}/>
                <h1 className="font-poppins text-white font-bold">delete</h1>
            </div>

        </div>
    )
}