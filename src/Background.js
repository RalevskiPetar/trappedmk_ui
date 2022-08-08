import React from 'react'
import ComingSoon from './ComingSoon'
import Footer from './Footer'

const Background = () => {
  return (
    <div className="h-screen   bg-cover    bg-[url('https://trapped.mk/img/9.png')] ">
      <div className='h-screen z-10 backdrop-blur flex flex-col justify-center items-center overflow-x-hidden'>
        <ComingSoon />
        <Footer />
      </div>
    </div>
  )
}

export default Background