import React from 'react'
import Footer from '../Footer'
import LoginFrom from './LoginFrom'

const Login = () => {
  return (
    <div className="flex flex-col justify-between lg:justify-center lg:items-center h-screen  lg:bg-center lg:bg-[url('http://localhost:3000/img/anim4.png')]">

      <img src='http://localhost:3000/img/login.png' className='w-screen h-1/2 lg:hidden' />
      {/* // <img src='http://localhost:3000/img/anim4.png' className=' lg:blur-sm  hidden lg:block'/> */}
      <LoginFrom />
      <Footer />
    </div>
  )
}

export default Login