import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { useDispatch } from "react-redux"
import { ImagesActions } from "../../../Redux/Clothes/Actions"
import UploadImage from "../../UploadImage"
import { ProduktSlika } from "./ProduktSlika"


export const SelektiranProdukt = ({
    clicked,
    setClicked,
    clothesReducer,
}) => {
    const dispatch = useDispatch()

    const images = clothesReducer.images.data.filter(img => img.product_id === clicked.id)
    const [files, setFiles] = useState([])
    
    
    const handleChange = e => {
        console.log([...e.target.files])
        setFiles([...e.target.files])
    }

    const handleSubmit = e => {
        const data = new FormData()
        console.log(files)
        files.map((f, idx) => data.append(("image_"+idx), f))
        data.append("product_id", clicked.id)
        dispatch(ImagesActions.create(data))
        setFiles([])
    }

    return (
        <div className="w-full mt-5">
            <div className="flex items-center justify-center gap-2 text-xl">
                <IoIosArrowBack className="font-bold cursor-pointer" onClick={e => setClicked(null)} />
                <p>{clicked.name}</p>
            </div>
            {images.length === 0 ? <h1 className="text-center my-3">Продуктот нема слики.</h1> :
                <div className="px-8 my-5 w-full gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {images.map(img => <ProduktSlika slika={img}/>)}
                </div>
            }

            <UploadImage
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

        </div>
    )
}