import React from 'react'

const UploadImage = ({
    handleSubmit,
    handleChange
}) => {
  return (
    <div className="flex justify-center mt-8 mb-8  w-screen">
    <div className=" rounded-lg w-2/4">
        <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">Image Upload</label>
            <div className="flex items-center justify-center w-full">
                <label
                    className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach an image</p>
                    </div>
                    <input onChange={e => handleChange(e)} type="file" multiple={true} accept="image/*" className="opacity-0" />
                </label>
            </div>
        </div>
        <div className="flex justify-center p-2">
            <button className="w-full px-4 py-2 text-white bg-blue-500 rounded" onClick={e => handleSubmit()}>Add</button>
        </div>
    </div>
</div>
  )
}

export default UploadImage