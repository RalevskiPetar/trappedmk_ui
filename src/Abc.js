import  React, { useEffect, useState } from 'react'
import Loading from 'react-loading';
import ReactLoading from 'react-loading';
import { AiOutlineFacebook , AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

const Abc = () => {
    const [shouldRemove, setShoudlRemove] = useState(false)

    let interval = undefined

    useEffect(() => {
        const bukvi = ["c", "o", "m", "i", "n", "g", " ", "s", "o", "o", "n"]
        let counter = 0;
        if (interval === undefined && document.getElementById("coomingsoon").innerHTML == '') interval = setInterval(() => {
            if (counter >= bukvi.length) return clearInterval(interval)
            if (document.getElementById("coomingsoon") == null) return clearInterval(interval)
            document.getElementById("coomingsoon").innerHTML += `<p class="single-character">${bukvi[counter]}</p>`
            counter = counter + 1;
            console.log(counter)
        }, 120)
    }, [])

    return (
        <div className=' bg-zinc-900  lg:w-1/5 h-80 p-6  justify-between items-center z-20  shadow-xl  flex flex-col   overflow-x-hidden overflow-y-hidden'>

            <img src='http://trapped.mk/img/logo.png' className='md:w-[20rem] w-[15rem]  animate-fade-in-down z-20' />
            <div className='inline-block flex-col items-center'>
                <div id="coomingsoon" className='flex flex-row text-white text-xl font-poppins '>


                </div>
                
            </div>
           <div className='flex flex-col items-center gap-4'>
           <div className='flex flex-row gap-4 items-center'>
            <a className='border-[0.1rem] border-white rounded-full p-2 text-white hover:text-black hover:bg-white' href='https://www.instagram.com/trappedmk/?hl=en'> <AiOutlineFacebook  size={20} className="rounded-lg"/> </a>
                <a className='border-[0.1rem] border-white rounded-full p-2 text-white hover:text-black hover:bg-white' href='https://www.instagram.com/trappedmk/?hl=en'><AiOutlineInstagram  size={20} /></a>
                <a className='border-[0.1rem] border-white rounded-full p-2 text-white hover:text-black hover:bg-white' href='https://www.instagram.com/trappedmk/?hl=en'>   <FiTwitter   size={20}/></a>
            </div>
            <h1 className='text-white font-poppins  text-[0.7rem]'>since 2018</h1>
           </div>

        </div>
    )
}

export default Abc