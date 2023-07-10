import React, { useState } from 'react'
import Footer from '../Footer'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BarLoader from './BarLoader'
import { updateUser } from '../Redux/Users/Actions'
import { AiOutlineLock } from 'react-icons/ai'

const ProfileInfo = () => {
    const { id } = useParams()
    const user = useSelector(state => state.user)
    const [userInfo, setUserInfo] = useState({ ...user.user.data?.user })
    const dispatch = useDispatch()
    console.log(userInfo)
    const handleUpdate = e => {

        e.preventDefault()
        const form = new FormData()
        form.append("id", user.user.data.user.id)
        form.append("name", userInfo["name"])
        form.append("surname", userInfo["surname"])
        form.append("address", userInfo["address"])
        form.append("email", userInfo["email"])
        form.append("phone", userInfo["phone"])
        form.append("password", userInfo["password"])
        dispatch(updateUser(form))
    }
    const handleChange = e => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    return (
        <div className='flex flex-col  min-h-screen'>
            <div className='bg-zinc-800'>
                <div className='flex flex-row justify-between items-center p-6  '>
                    <Link to="/profile">
                        <div className="flex flex-row items-center gap-1">
                            <BiArrowBack color='white' />
                            <h1 className='font-poppins text-white'>Orders</h1>
                        </div>
                    </Link>
                    <img src='http://localhost:3000/img/logo.png' className='w-[5rem]' />
                    <h1 className='font-poppins text-zinc-800'>________</h1>
                </div>
                <div className='flex flex-row  p-6 items-center gap-10 justify-center'>
                    <img src='http://localhost:3000/img/profilna.png' className='rounded-full w-20' />
                    <div>
                        <h1 className='font-poppins text-white'>Hello,</h1>
                        <div className='flex flex-row gap-1'>
                            <h1 className='font-poppins text-white'>{user.user.data?.user?.name}</h1>
                            <h1 className='font-poppins text-white'>{user.user.data?.user?.surname}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row gap-2 w-screen justify-center'>
                <form onSubmit={e => handleUpdate(e)} className='flex flex-col justify-center align-middle items-center h-full gap-4 pb-[3rem] pt-[5rem] w-1/2'>
                    <div className='flex flex-col justify-center w-screen items-center'>
                        <h1 className='font-poppins text-slate-400 text-center'>name</h1>
                        <input onChange={e => handleChange(e)} value={userInfo["name"]} name="name" type='text' className='outline-none text-black border-b-2 border-b-slate-300 w-5/6 lg:w-1/4 text-lg lg:text-center' placeholder={user.user.data?.user?.name} />
                    </div>
                    <div className='flex flex-col justify-center w-screen items-center'>
                        <h1 className='font-poppins text-slate-400 text-center'>surname</h1>
                        <input onChange={e => handleChange(e)} value={userInfo["surname"]} name="surname" type='text' className='outline-none text-black border-b-2 border-b-slate-300 w-5/6 lg:w-1/4 text-lg lg:text-center' placeholder={user.user.data?.user?.surname} />
                    </div>
                    <div className='flex flex-col justify-center w-screen items-center'>
                        <h1 className='font-poppins text-slate-400 text-center'>address</h1>
                        <input onChange={e => handleChange(e)} value={userInfo["address"]} name="address" type='text' className='outline-none text-black border-b-2 border-b-slate-300 w-5/6 lg:w-1/4 text-lg lg:text-center' placeholder={user.user.data?.user?.address} />
                    </div>
                    <div className='flex flex-col justify-center w-screen items-center'>
                        <h1 className='font-poppins text-slate-400 text-center'>email</h1>
                        <input onChange={e => handleChange(e)} value={userInfo["email"]} name="email" type='text' className='outline-none text-black border-b-2 border-b-slate-300 w-5/6 lg:w-1/4 text-lg lg:text-center' placeholder={user.user.data?.user?.email} />
                    </div>
                    <div className='flex flex-col justify-center w-screen items-center'>
                        <h1 className='font-poppins text-slate-400 text-center'>phone</h1>
                        <input onChange={e => handleChange(e)} value={userInfo["phone"]} name="phone" type='text' className='outline-none text-black border-b-2 border-b-slate-300 w-5/6 lg:w-1/4 text-lg lg:text-center' placeholder={user.user.data?.user?.phone} />
                    </div>
                    <div className='flex flex-col justify-center w-screen items-center'>
                        <h1 className='font-poppins text-slate-400 text-center'>password</h1>
                        <input onChange={e => handleChange(e)} value={userInfo["password"]} name="password" type='password' className='outline-none text-black border-b-2 border-b-slate-300 w-5/6 lg:w-1/4 text-lg lg:text-center' placeholder="password" />
                    </div>
                    {user.user.updateStatus == "Success" ? <p class="font-poppins text-red-500 font-bold ">USER UPDATED</p> : user.user.updateStatus == "Pending" ?

                        <BarLoader />
                        : null}
                    {user.user.updateStatus = ""}
                    <button onClick={e => handleUpdate(e)} className='border-[0.1rem] border-zinc-800 p-2 font-poppins pl-4 pr-4 rounded-md  '>save</button>
                </form>
                {/* <div className='flex flex-col items-center justify-center w-1/2'>
                    <div className='flex flex-row items-center gap-4  p-[2rem] border-[0.1rem] pl-[8rem] pr-[8rem]'>
                        <h1 className='font-poppins text-xl'>Orders</h1>
                        <h1 className='font-poppins text-xl bg-slate-200 p-2 rounded-full'>34</h1>
                    </div>
                    <div className='flex flex-col gap-1 border-[0.1rem] pl-[7.1rem] pr-[7.1rem] p-[2rem]'>
                        <h1 className='font-poppins text-xl p-2'>Loyalty Points</h1>
                        <div class=" bg-gray-200 rounded-full ">
                            <div className="bg-emerald-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-1/4"> </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 border-[0.1rem] pl-[6.9rem] pr-[6.9rem] p-3'>
                        <h1 className='font-poppins text-xl p-2'>Achievements</h1>
                        <div className='flex flex-row gap-1 '>
                            <AiOutlineLock className='border-slate-300 border-[0.1rem] p-2 rounded-md' size={50} />
                            <AiOutlineLock className='border-slate-300 border-[0.1rem] p-2 rounded-md' size={50} />
                            <AiOutlineLock className='border-slate-300 border-[0.1rem] p-2 rounded-md  ' size={50} />
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='w-screen flex flex-row justify-center lg:mb-1 mb-10'>
                <button className='font-poppins bg-black lg:w-1/12 w-1/5 md:w-1/5 text-white pt-2 pb-2 rounded-md transition-all hover:scale-110'>LOGOUT</button>
            </div>
            <Footer />

        </div>

    )
}

export default ProfileInfo