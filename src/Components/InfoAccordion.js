import React, { useState } from 'react'
import { AiOutlinePlus , AiOutlineMinus , AiOutlineUserAdd} from 'react-icons/ai'
import Subscribe from './Subscribe'
import { GiNewspaper } from 'react-icons/gi'
import { MdOutlineLogin } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const InfoAccordion = () => {
    const [expanded, setExpanded] = useState(false)
    const user = useSelector(state => state.user)

    return (
        <div className='flex flex-col items-center gap-4 lg:w-1/2 lg:justify-center z-10 lg:p-4 lg:h-2/3 lg:bg-opacity-40 lg:bg-white lg:bg-backdrop-blur-md lg:drop-shadow-lg lg:fixed lg:top-[10rem] lg:rounded-sm '>
            <div className='flex flex-col items-center p-4 lg:hidden '>
                <img src='http://localhost:3000/img/blacklogo.png ' className='w-[4.2rem] lg:w-[12rem]' />
                <h1 className='font-poppins text-[0.7rem] text-black font-bold lg:text-[1rem]'>since 2018</h1>
            </div>
            <div className='flex flex-col items-center p-4'>
                <img src='http://localhost:3000/img/logo.png ' className='w-[4.2rem] lg:w-[14rem]' />
                <h1 className='font-poppins text-[0.7rem] text-black font-bold lg:text-[1rem] lg:hidden'>since 2018</h1>
            </div>
            <div className='flex flex-col justify-center items-center lg:flex-row lg:items-center lg:w-full lg:justify-center'>
            <div className='flex flex-col justify-center items-center lg:max-h-[40rem] lg:w-1/2'>
            
            <div onClick={e => expanded === 1 ? setExpanded(false) : setExpanded(1)} className='flex flex-row gap-1 items-center p-2'>
                <h1 className='font-poppins  text-[0.7rem] lg:text-[0.9rem] lg:font-bold lg:text-white'>DELIVERY & RETURN</h1>
               {expanded == 1 ?  <AiOutlineMinus className='lg:text-white' size={10} /> :  <AiOutlinePlus className='lg:text-white' size={10} />}
            </div>
            {expanded == 1 ? 
            <div className='flex flex-col items-center text-[0.8rem] lg:text-[0.9rem] gap-2 animate-fade-in-nav'>
               
                    <a className='font-poppins lg:text-white '>ПОЛИТИКА ЗА ВРАЌАЊЕ И РЕКЛАМАЦИИ</a>
                    <a className='font-poppins lg:text-white'>ИНФОРМАЦИИ ЗА ДОСТАВА</a>
                    <a className='font-poppins lg:text-white'>ЗАМЕНА</a>
                    <a className='font-poppins lg:text-white'>ПОМОШ</a>
               
            </div> 
            : null}
            <div onClick={e => expanded === 2 ? setExpanded(false) : setExpanded(2)} className='flex flex-row gap-1 items-center p-2 '>
                <h1 className='font-poppins font- text-[0.7rem] lg:text-[0.9rem] lg:font-bold lg:text-white '>CUSTOMER CARE</h1>
                {expanded == 2 ?  <AiOutlineMinus className='lg:text-white' size={10} /> :  <AiOutlinePlus className='lg:text-white' size={10} />}
            </div>
            {expanded == 2 ? 
            <div className='flex flex-col items-center text-[0.8rem] lg:text-[0.8rem] gap-2 animate-fade-in-down'>
               
            <a className='font-poppins lg:text-white'>ЛИСТА НА ЖЕЛБИ </a>
            <a className='font-poppins lg:text-white'>КОВИД-19</a>
            <a className='font-poppins lg:text-white'>ЧПП</a>
       
    </div>
            : null}
            <div onClick={e => expanded === 3 ? setExpanded(false) : setExpanded(3)} className='flex flex-col gap-1 items-center p-2'>
                <div className='flex flex-row gap-1 items-center p-2'>
                    <h1 className='font-poppins  text-[0.7rem] lg:text-[0.9rem] lg:font-bold lg:text-white'>TERMS & CONDITIONS</h1>
                    {expanded == 3 ?  <AiOutlineMinus className='lg:text-white' size={10} /> :  <AiOutlinePlus className='lg:text-white' size={10} />}
                </div>
                {expanded == 3 ? 
                <div className='flex flex-col items-center text-[0.8rem] lg:text-[0.9rem] gap-2 animate-fade-in-down'>
               
                <a className='font-poppins lg:text-white'>ПРАВИЛА</a>
                <a className='font-poppins lg:text-white'>ПОЛИТИКА НА ПРИВАТНОСТ</a>
           
        </div>
                : null}


            </div>
            </div>
            <div className='flex flex-col gap-5 lg:h-[7.2rem] lg:w-1/2 lg:border-l-white lg:border-l-[0.15rem]'>
            <div className='flex flex-row items-center gap-2  lg:justify-center'>
            <Link to="/siteproizvodi"><h1 className='font-poppins font- text-[0.7rem] lg:text-[0.9rem] lg:font-bold lg:text-white '>CATALOG</h1></Link>
            
            <GiNewspaper className='lg:text-white' />
            </div>
            <div className='flex flex-row items-center gap-2 lg:justify-center'>
            {user.user.createStatus == "Success"  ? <Link to="/profile"><h1 className='font-poppins font- text-[0.7rem] lg:text-[0.9rem] lg:font-bold lg:text-white'>LOGIN</h1></Link> : <Link to="/login"><h1 className='font-poppins font- text-[0.7rem] lg:text-[0.9rem] lg:font-bold lg:text-white'>LOGIN</h1></Link>}
            <MdOutlineLogin className='lg:text-white' />
            </div>
            <div className='flex flex-row items-center gap-2 lg:justify-center'>
            {user.user.createStatus == "Success"  ? <Link to="/profile"><h1 className='font-poppins font- text-[0.7rem] lg:text-[0.9rem] lg:font-bold lg:text-white'>REGISTER</h1></Link> : <Link to="/register"><h1 className='font-poppins font- text-[0.7rem] lg:text-[0.9rem] lg:font-bold lg:text-white'>REGISTER</h1></Link> }
            <AiOutlineUserAdd className='lg:text-white' />
                </div>
            </div>
            </div>
            <Subscribe />
        </div>
    )
}

export default InfoAccordion