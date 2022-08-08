import React, { useState } from 'react'
import Footer from '../Footer'
import Header from './Header'
import { BiArrowBack, BiStore } from 'react-icons/bi'
import { MdBlock, MdOutlineMoneyOffCsred } from 'react-icons/md'
import { RiTShirtLine } from 'react-icons/ri'
import { BsTruck, BsCart, BsInfoCircle } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineDollarCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { TbDeviceAnalytics } from 'react-icons/tb'
import Poracki from './ProfileComponents/Poracki'
import Isporacani from './ProfileComponents/Isporacani'
import Odbieni from './ProfileComponents/Odbieni'
import Omileni from './ProfileComponents/Omileni'
import Info from './ProfileComponents/Info'
import Zarabotka from './ProfileComponents/Zarabotka'
import Magacin from './ProfileComponents/Magacin'
import Statistika from './ProfileComponents/Statistika'
import Kosnicka from './ProfileComponents/Kosnicka'
import { FiSettings } from 'react-icons/fi'
import AdminSettings from './ProfileComponents/AdminSettings'
import { GiPayMoney } from 'react-icons/gi'
import Rasprodazba from './ProfileComponents/Rasprodazba'
import { useSelector } from 'react-redux'
import { BiDownArrow } from 'react-icons/bi'



const Profile = () => {
    const numPoracki = 1
    const user = useSelector(state => state?.user)
    const menu = [
        {
            id: 0,
            name: "Порачки",
            class: "bg-zinc-800"
        },
        {
            id: 1,
            name: "Порачки",
            class: "bg-yellow-600"
        },
        {
            id: 2,
            name: "Испорачани",
            class: "bg-green-700"
        },
        {
            id: 3,
            name: "Одбиени",
            class: "bg-red-600"
        },
        {
            id: 4,
            name: "Омилени",
            class: "bg-purple-400"
        },
        {
            id: 5,
            name: "Кошничка",
            class: "bg-blue-500"
        },
        {
            id: 6,
            name: "Инфо",
            class: "bg-slate-500"
        },
        {
            id: 7,
            name: "Заработка",
            class: "bg-zinc-900"
        },
        {
            id: 8,
            name: "Магацин",
            class: "bg-zinc-900"
        },
        // {
        //     id: 9,
        //     name: "Статистика",
        //     class: "bg-zinc-900"
        // },
        {
            id: 10,
            name: "Опции",
            class: "bg-zinc-900"
        },
        {
            id: 11,
            name: "Распродажба",
            class: "bg-zinc-900"
        },
    ]
    const [color, setColor] = useState(0)

    const getId = (option) => {
        if (option == "Порачки") return <Poracki numPoracki={numPoracki} />
        else if (option == "Испорачани") return <Isporacani />
        else if (option == "Одбиени") return <Odbieni />
        else if (option == "Омилени") return <Omileni />
        else if (option == "Кошничка") return <Kosnicka />
        else if (option == "Инфо") return <Info />
        else if (option == "Заработка") return <Zarabotka />
        else if (option == "Магацин") return <Magacin />
        // else if (option == "Статистика") return <Statistika />
        else if (option == "Опции") return <AdminSettings />
        else if (option == "Распродажба") return <Rasprodazba />

    }
    console.log(menu.find(m => m.id == color).name)
    return (

        <div >
            <div className={menu.find(m => m.id == color).class}>
                <div className='flex flex-row justify-between items-center p-6  '>
                    <Link to="/">
                        <div className="flex flex-row items-center gap-1">
                            <BiArrowBack color='white' />
                            <h1 className='font-poppins text-white'>Home</h1>
                        </div>
                    </Link>
                    <img src='http://localhost:3000/img/logo.png' className='w-[5rem]' />
                    <div className='flex flex-row gap-2 items-center'>
                        
                        
                        <Link to="/profile/edit"><h1 className='font-poppins text-white'>Edit info</h1></Link>
                        <FiSettings color="white" />
                    </div>
                </div>
                <div className='flex flex-col lg:flex lg:flex-col  lg:w-screen '>
                    <div className='lg:flex lg:flex-row flex lg:justify-center flex-col lg:mb-10'>
                        <div className='flex flex-row  justify-between p-2 lg:w-1/3 items-center '>
                            <div onClick={e => setColor(1)} className='flex flex-col gap-2 w-screen lg:w-1/4 items-center'>
                                {numPoracki == 0 ?
                                    <span className='relative top-6 z-10 -right-7 items-center  w-7 h-7 flex justify-center text-white font-poppins align-middle text-[0.8rem] font-bold rounded-full'></span>
                                    :
                                    <span className='relative top-6 z-10 -right-7 items-center bg-red-500 w-7 h-7 flex justify-center text-white font-poppins align-middle text-[0.8rem] font-bold rounded-full'>{numPoracki}</span>}
                                <div className='flex flex-col items-center w-2/4   gap-2  bg-yellow-500  p-4 rounded-lg  lg:bg-opacity-40 lg:bg-white lg:bg-backdrop-blur-md lg:drop-shadow-lg lg:shadow-xl'>

                                    <RiTShirtLine color='white' size={30} />
                                </div>
                                <h1 className='font-poppins text-[1rem]  text-white'>Порачки</h1>
                            </div>
                            <div onClick={e => setColor(2)} className='flex flex-col gap-2 w-screen lg:w-1/4 items-center'>
                                <span className='relative top-6 z-10 -right-7 items-center bg-red-500 w-7 h-7 flex justify-center text-white font-poppins align-middle text-[0.8rem] font-bold rounded-full'>16</span>
                                <div className='flex flex-col items-center w-2/4  gap-2   p-4 rounded-lg lg:bg-opacity-40 lg:bg-white lg:bg-backdrop-blur-md lg:drop-shadow-lg lg:shadow-xl'>

                                    <BsTruck color='white' size={30} />
                                </div>
                                <h1 className='font-poppins text-[1rem] text-white'>Испорачани</h1>
                            </div>
                            <div onClick={e => setColor(3)} className='flex flex-col gap-2 lg:w-1/4 w-screen items-center'>

                                <span className='relative top-6 z-10 -right-7 items-center bg-red-500 w-7 h-7 flex justify-center text-white font-poppins align-middle text-[0.8rem] font-bold rounded-full'>0</span>
                                <div className='lg:bg-opacity-40 lg:bg-white lg:bg-backdrop-blur-md lg:drop-shadow-lg flex flex-col items-center w-2/4 gap-2   p-4 rounded-lg lg:shadow-xl'>

                                    <MdBlock color='white' size={30} />

                                </div>
                                <h1 className='font-poppins text-[1rem]  text-white'>Одбиени</h1>
                            </div>
                        </div>
                        <div className='flex flex-row justify-around  p-2 items-center lg:w-1/3'>
                            <div onClick={e => setColor(4)} className='flex flex-col lg:w-1/4 gap-2 w-screen items-center'>
                                <span className=' relative top-6 items-center z-10 -right-7 bg-red-500 w-7 h-7 flex justify-center text-white font-poppins align-middle text-[0.8rem] font-bold rounded-full'>3</span>
                                <div className='lg:bg-opacity-40 lg:bg-white lg:bg-backdrop-blur-md lg:drop-shadow-lg flex flex-col items-center w-2/4 gap-2   p-4 rounded-lg lg:shadow-xl'>

                                    <AiOutlineHeart color='white' size={30} />
                                </div>
                                <h1 className='font-poppins text-[1rem] text-white '>Омилени</h1>
                            </div>
                            <div onClick={e => setColor(5)} className='flex flex-col lg:w-1/4 gap-2 w-screen items-center'>
                                <span className='relative top-6 z-10 -right-7 bg-red-500 w-7 h-7 flex justify-center items-center text-white font-poppins align-middle text-[0.8rem] font-bold rounded-full'>1</span>
                                <div className='lg:bg-opacity-40 lg:bg-white lg:bg-backdrop-blur-md lg:drop-shadow-lg flex flex-col items-center w-2/4 gap-2  p-4 rounded-lg lg:shadow-xl '>

                                    <BsCart color='white' size={30} />
                                </div>
                                <h1 className='font-poppins text-[1rem] text-white '>Кошничка</h1>
                            </div>
                            <div onClick={e => setColor(6)} className='flex lg:w-1/4 flex-col gap-2 w-screen items-center'>
                                <span className='relative top-6 -right-7  w-7 h-7 flex justify-center text-white font-poppins align-middle rounded-full z-10'></span>
                                <div className='lg:bg-opacity-40 lg:bg-white lg:bg-backdrop-blur-md lg:drop-shadow-lg flex flex-col items-center w-2/4 gap-2 0  p-4 rounded-lg lg:shadow-xl '>

                                    <BsInfoCircle color='white' size={30} />
                                </div>
                                <h1 className='font-poppins text-[1rem]  text-white '>Инфо</h1>
                            </div>
                        </div>

                    </div>
                    
                    {user.user.data.user.usertype_id == 1 ?

                        <div className='flex flex-col w-screen '>
                            <div className='flex flex-row justify-around gap-2 items-center'>
                                <div onClick={e => setColor(7)} className='flex flex-col lg:w-1/4 gap-2 w-screen items-center lg:mb-4'>
                                    <span className='relative top-6 -right-7  w-7 h-7 flex justify-center text-white font-poppins align-middle rounded-full'></span>
                                    <div className='flex flex-col items-center w-2/4 gap-2 p-2 rounded-lg '>

                                        <AiOutlineDollarCircle color='white' size={25} />
                                    </div>
                                    <h1 className='font-poppins text-[0.8rem] text-white '>Заработка</h1>
                                </div>
                                <div onClick={e => setColor(8)} className='flex flex-col lg:w-1/4 gap-2 w-screen items-center lg:mb-4'>
                                    <span className='relative top-6 -right-7  w-7 h-7 flex justify-center text-white font-poppins align-middle rounded-full'></span>
                                    <div className='flex flex-col items-center w-2/4 gap-2 p-2  rounded-lg '>
                                        <BiStore color='white' size={25} />
                                    </div>
                                    <h1 className='font-poppins text-[0.8rem] text-white '>Магацин</h1>
                                </div>
                                {/* <div onClick={e => setColor(9)} className='flex flex-col gap-2 w-screen items-center'>
                        <span className='relative top-6 -right-7  w-7 h-7 flex justify-center text-white font-poppins align-middle rounded-full'></span>
                            <div className='flex flex-col items-center w-2/4 gap-2 border-[0.1rem]   p-4 rounded-lg '>
                                <TbDeviceAnalytics color='white' size={30} />
                            </div>
                            <h1 className='font-poppins text-[1rem]  text-white '>Статистика</h1>
                        </div> */}



                                <div onClick={e => setColor(10)} className='flex flex-col lg:w-1/4 gap-2 w-screen items-center lg:mb-4'>
                                    <span className='relative top-6 -right-7  w-7 h-7 flex justify-center text-white font-poppins align-middle rounded-full'></span>
                                    <div className='flex flex-col items-center w-2/4 gap-2  p-2 rounded-lg '>
                                        <FiSettings color='white' size={25} />
                                    </div>
                                    <h1 className='font-poppins text-[0.8rem] text-white '>Опции</h1>
                                </div>
                                <div onClick={e => setColor(11)} className='flex flex-col  lg:w-1/4 gap-2 w-screen items-center lg:mb-4'>
                                    <span className='relative top-6 -right-7  w-7 h-7 flex justify-center text-white font-poppins align-middle rounded-full'></span>
                                    <div className='flex flex-col items-center w-2/4 gap-2 p-2 rounded-md '>
                                        <GiPayMoney color='white' size={25} />
                                    </div>
                                    <h1 className='font-poppins text-[0.8rem] text-white '>Распродажба</h1>
                                </div>
                                {/* <div onClick={e => setColor(12)} className='flex flex-col gap-2 w-screen items-center'>
                        <span className='relative top-6 -right-7  w-7 h-7 flex justify-center text-white font-poppins align-middle rounded-full'></span>
                            <div className='flex flex-col items-center w-2/4 gap-2 border-[0.1rem]   p-4 rounded-lg '>
                                <FiSettings color='white' size={30} />
                            </div>
                            <h1 className='font-poppins text-[1rem] text-white '>Нема</h1>
                        </div> */}


                            </div>
                        </div> : null}
                </div>
            </div>
            <h1></h1>
            {getId(menu.find(m => m.id == color).name)}
            <Footer />
        </div>
    )
}

export default Profile