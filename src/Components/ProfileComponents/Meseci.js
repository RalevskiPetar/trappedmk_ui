import React, { useEffect, useState } from 'react'
import { BiCircle } from 'react-icons/bi';
import { BsCircleFill, BsFillCircleFill } from 'react-icons/bs';
import { GiJapan } from 'react-icons/gi';

const Meseci = (props) => {
    const [selected, setSelected] = useState(0)
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () =>
            document.body.style.overflow = 'unset';
    }, [])
    
    return (
        <div className=' h-screen w-screen fixed top-0 animate-fade-in-down lg:flex lg:items-center lg:justify-center  ' style={{ "backgroundColor": "rgba(0,0,0,0.50)" }}>
            <div className='bg-white p-5 flex flex-col gap-4 lg:w-1/4 lg:flex lg:items-center '>
                <h1 className='font-poppins text-slate-300 p-4 text-center'>- избери месец -</h1>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-4 justify-center'>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 flex justify-center    rounded-full shadow-lg border-slate-300 p-4 lg:w-1/4'>JAN</h1>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 rounded-full flex justify-center shadow-lg border-slate-300 p-4 lg:w-1/4'>FEB</h1>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 rounded-full shadow-lg flex justify-center border-slate-300 p-4 lg:w-1/4'>MAR</h1>
                    </div>
                    <div className='flex flex-row gap-4 justify-center'>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 flex justify-center rounded-full shadow-lg border-slate-300 p-4 lg:w-1/4'>APR</h1>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 flex justify-center rounded-full shadow-lg border-slate-300 p-4 lg:w-1/4'>MAY</h1>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 flex justify-center rounded-full shadow-lg border-slate-300 p-4 lg:w-1/4'>JUN</h1>
                    </div>
                    <div className='flex flex-row gap-4 justify-center'>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 flex justify-center rounded-full shadow-lg border-slate-300 p-4 lg:w-1/4'>JUL</h1>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 flex justify-center rounded-full shadow-lg border-slate-300 p-4 lg:w-1/4'>AVG</h1>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 flex justify-center rounded-full shadow-lg border-slate-300 p-4 lg:w-1/4'>SEP</h1>
                    </div>
                    <div className='flex flex-row gap-4 justify-center'>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 flex justify-center rounded-full shadow-lg border-slate-300 p-4 lg:w-1/4'>OCT</h1>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 flex justify-center rounded-full shadow-lg border-slate-300 p-4 lg:w-1/4'>NOV</h1>
                        <h1 className='border-[0.15rem] font-poppins w-1/6 flex justify-center rounded-full shadow-lg border-slate-300 p-4 lg:w-1/4'>DEC</h1>
                    </div>
                </div>
                <button onClick={e => props.setCalendar(false)} className='font-poppins border-[0.1rem] border-zinc-900 bg-zinc-900 text-white p-2 pr-4 pl-4 rounded-md mt-2 lg:w-1/3'>close</button>
            </div>



        </div>
    )
}

export default Meseci