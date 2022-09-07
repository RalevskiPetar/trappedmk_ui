import React, { useEffect, useState } from 'react'
import { BiCircle } from 'react-icons/bi';
import { BsCircleFill, BsFillCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { create_Money } from '../../Redux/Money/Actions';

const DodajSuma = (props) => {
    const [newMoneyLog , setNewMoneyLog] = useState("")
    const dispatch = useDispatch()
    const handleNewMoneyLog = e => {
        e.preventDefault()
        const form = new FormData()
        form.append("ammount" , newMoneyLog["ammount"])
        form.append("pricina" , newMoneyLog["pricina"])
        form.append("type_id" , selected)
        dispatch(create_Money(form))

    }
    const handleChange = e => {
        setNewMoneyLog({...newMoneyLog , [e.target.name] : e.target.value})
    }
    const [selected , setSelected ] = useState(1)
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () =>
            document.body.style.overflow = 'unset';
    }, [])
    return (
        <form onSubmit={e => handleNewMoneyLog(e)} className=' h-screen w-screen fixed top-0   lg:flex lg:flex-row lg:justify-center lg:items-center' style={{ "backgroundColor": "rgba(0,0,0,0.50)" }}>
            <div className='flex flex-col  bg-slate-100  lg:w-1/6 justify-center lg:items-center p-6 h-1/2 animate-fade-in-down '>
                <input onChange={e => handleChange(e)} name="ammount" className='font-poppins outline-none p-2 mt-2' type="text" placeholder="suma" />
                <input onChange={e => handleChange(e)}  name="pricina" className='font-poppins outline-none border-[0.1rem] border-slate-100 p-2 mt-2' type="text" placeholder="pricina" />
                <div className='flex flex-row justify-center gap-4'>
                    <div className='flex flex-row items-center gap-2 p-4' onClick={e => setSelected(1)}>
                    {selected == 1 ? <BsCircleFill size={12} /> :  <BiCircle size={15} />}
                    <h1  className='font-poppins text-md  '>PRILIV</h1>
                    </div>

                    <div className='flex flex-row items-center gap-2 p-4' onClick={e => setSelected(2)}>
                       {selected == 2 ? <BsCircleFill size={12} /> :  <BiCircle size={15} />}
                    <h1  className='font-poppins text-md '>ODLIV</h1>
                    </div>
                </div>
                <h1 className='text-center font-poppins text-[0.8rem] text-slate-400 '>* YOU HAVE TO SELECT ONE </h1>
                <button type='button' onClick={e => handleNewMoneyLog(e)} className='font-poppins bg-zinc-900 text-white p-2 pr-4 pl-4 rounded-md mt-4 lg:w-1/3'>add</button>
                <h1 className='font-poppins text-center p-4'>or</h1>
                <button type='button'  onClick={e => props.setExpanded(false)} className='font-poppins lg:w-1/3 border-[0.1rem] border-zinc-900 text-zinc-900 p-2 pr-4 pl-4 rounded-md mt-2'>close</button>
         
            </div>
            
        </form>
    )
}

export default DodajSuma