import React from 'react'
import ReactLoading from 'react-loading';

const Title = ({ type, color }) => {
  return (
    <div className='hideMe z-20 h-96 mt-[20rem] flex flex-col items-center gap-10 w-screen overflow-x-hidden overflow-y-hidden'>

      <img src='http://trapped.mk/img/logo.png' className='md:w-[20rem] w-[15rem]  animate-fade-in-down z-20' />
      <ReactLoading className='z-20 transition-all delay-300 ' type={"spokes"} color={"white"} height={40} width-={20} />
    </div>
  )
}

export default Title