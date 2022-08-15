import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, updateUser_Type } from '../../Redux/Users/Actions'


const AdminSettings = () => {
    const users = useSelector(state => state?.user.user.data?.users)
    const [ newAdmin , setNewAdmin ] = useState("")
    const [ modal , setModal ] = useState(false)
    const [ selected , setSelected ] = useState("")
     const dispatch = useDispatch()
    const makeAdmin = e => {
        e.preventDefault()
        const form = new FormData()
        let usr = users.find(u => u.email == newAdmin)
        form.append("id" , usr?.id)
        form.append("name" , usr?.name )
        form.append("surname" , usr?.surname)
        form.append("address" , usr?.address )
        form.append("email" , usr?.email)
        form.append("phone" , usr?.phone )
        form.append("usertype_id" , 1 )
        dispatch(updateUser(form))

    }
    const removeAdmin = e => {
      e.preventDefault()
      const form = new FormData()
      let usr = users?.find(u => u.name == selected)
      form.append("id" , usr?.id)
      form.append("name" , usr?.name )
      form.append("surname" , usr?.surname)
      form.append("address" , usr?.address )
      form.append("email" , usr?.email)
      form.append("phone" , usr?.phone )
      form.append("usertype_id" , 2 )
      dispatch(updateUser(form))

  }
  console.log(selected)
  return (
    <form onSubmit={e => makeAdmin(e)} className='flex flex-col items-center w-screen overflow-x-hidden gap-3 mb-10'>
        <h1 className='font-poppins text-slate-300 text-center p-4 '>- Make Admin -</h1>
        <input onChange={e => setNewAdmin(e.target.value)} name="email" type="text" placeholder="email"  className="bg-slate-100 w-2/3 font-poppins   p-2 outline-none "/>
        <button className='border-[0.1rem] text-black font-poppins rounded-md p-2 pl-4 pr-4'>submit</button>
        <h1 className='font-poppins text-slate-300 text-center p-4 '>- List of Admins -</h1>
        <div className='flex flex-row justify-between p-6 lg:p-0 w-screen'>
            <div onClick={e => setModal(true)} className='w-1/2 border-r border-r-slate-200 border-b border-b-200-slate'> 
                
               <h1 className='font-poppins border-b border-b-200-slate lg:text-2xl lg:p-1 lg:border-t-[0.1rem] lg:border-t-slate-200'>Name</h1>  
               {users?.filter(u => u.usertype_id == 1).map(us => <h1 className='font-poppins text-sm border-b border-b-200-slate lg:text-xl lg:p-1' onClick={e => setSelected(us.name)}>{us.name}</h1>)}
            </div>
            <div className='w-1/2'>
            <h1 className='font-poppins border-b border-b-200-slate lg:border-t-[0.1rem] lg:border-t-slate-200 lg:text-2xl lg:p-1'>Email</h1> 
            {users?.filter(u => u.usertype_id == 1).map(us => <h1 className='font-poppins text-sm border-b border-b-200-slate lg:text-xl lg:p-1'>{us.email}</h1>)}
            </div>
            
        </div>
        <h1 className='font-poppins text-red-500 text-center'>- By clicking on their name you can remove someone from the list -</h1>
            {modal == true ? <div  className=' h-screen w-screen fixed top-0 lg:flex lg:justify-center z-20' style={{ "backgroundColor": "rgba(0,0,0,0.50)" }}>
            <div className='flex flex-col lg:w-1/3 lg:h-1/5   bg-slate-100 justify-center p-6 h-1/3 animate-fade-in-down '>
                <div>
                    <h1 className='font-poppins text-red-500 text-center font-bold'>Are you sure that you want to remove {selected} from the admin list?</h1>
                </div>
               <div className='flex flex-col lg:flex lg:flex-row lg:p-4 lg:justify-center '>
               <button onClick={e => removeAdmin(e) || setModal(false)} className='font-poppins bg-zinc-900 text-white pr-4 pl-4 rounded-md p-2 mt-2 lg:mt-3 lg:w-1/6'>YES</button>
                <h1 className='font-poppins text-center p-4'>or</h1>
                <button onClick={e => setModal(false)} className='font-poppins border-[0.1rem] border-zinc-900 text-zinc-900 p-2 pr-4 pl-4 rounded-md lg:mt-3 lg:w-1/6 '>NO</button>
               </div>
                
            </div>
            
        </div> : null}
    </form>
  )
}

export default AdminSettings