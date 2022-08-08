import React from 'react'
import Footer from '../Footer'
import Header from './Header'
import ImageAnimation from './ImageAnimation'
import InfoAccordion from './InfoAccordion'

const MainPage = () => {
  return (
    <div className='lg:h-screen lg:w-screen lg:overflow-hidden'>
        <Header />
        <div className='lg:flex lg:items-center lg:flex-col lg:bg-black '>
        <ImageAnimation />
        <InfoAccordion />
          </div>
        <Footer />
    </div>
  )
}

export default MainPage