import React, { useEffect, useRef } from 'react'

const ImageAnimation = () => {
    var images = [
        "http://localhost:3000/img/anim1.jpg"
    ]

    const ref = useRef()
    useEffect(()=> {
        let i = 0
        const inteval = setInterval(() => {
            ref.current.src = images[i % 1]
            i++
        }, 3000);
        return () => clearInterval(inteval)
    } , [])
  return (
    <div className=' block pt-14 lg:pt-0   lg:flex lg:items-center lg:justify-center   lg:w-screen lg:h-screen'>
        <img ref={ref} src='http://localhost:3000/img/anim1.jpg' className='lg:blur-md lg:w-screen lg:min-h-screen' />
   
    </div>
  )
}

export default ImageAnimation