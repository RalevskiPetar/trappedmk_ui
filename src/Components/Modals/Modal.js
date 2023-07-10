import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Modal = (props) => {
    const [open, setOpen] = useState(true)

    useEffect(() => {
        if (open !== props.opened && props.opened !== undefined) setOpen(props.opened)
    }, [props.opened])

    return open === false ? null : (
        <div className=' h-screen w-screen fixed top-0 right-0 animate-fade-in-down lg:flex lg:items-center lg:justify-center  ' style={{ "backgroundColor": "rgba(0,0,0,0.50)" }}>
            <form className='bg-white p-5 flex flex-col gap-4 lg:w-1/6 rounded-md shadow-sm lg:flex lg:items-center '>
                <h1 className='font-poppins font-bold p-4 text-center'>{props.message}</h1>
                <div className='flex flex-row gap-2 w-full justify-center'>
                    <button onClick={() => {
                        setOpen(false)
                    }} className='font-poppins border-[0.1rem]  bg-slate-300 text-white p-2   rounded-md mt-2 lg:w-1/3'>Затвори</button>
                </div>
            </form>
        </div>
    )
}

export default Modal