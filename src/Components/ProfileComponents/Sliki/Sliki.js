import React, { Fragment, useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { ImagesActions } from '../../../Redux/Clothes/Actions'
import DoubleBubble from '../../BarLoader'
import UploadImage from '../../UploadImage'
import { ListaProdukti } from './ListaProdukti'
import { SelektiranProdukt } from './SelektiranProdukt'


const Sliki = () => {
  const dispatch = useDispatch()
  const [clicked, setClicked] = useState(null)
  const [search, setSearch] = useState("")
  const clothesReducer = useSelector(state => state.clothes)

  useEffect(() => {
    dispatch(ImagesActions.raed())
  }, [])

  const inputHandler = (e) => {
    var lowercase = e.target.value.toLowerCase();
    setSearch(lowercase)
  }

  if (clothesReducer.images.loadStatus === 'pending') return <DoubleBubble speed={1} message={clothesReducer.images.loadMessage} />

  return (
    <div className='flex flex-col items-center  '>
      {clicked === null ?
        <Fragment>
          <div className='flex flex-row w-screen items-center justify-center'>
            <input onChange={inputHandler} className=' border-t-[0.1rem] border-b-[0.1rem] border-l-[0.1rem]    border-l-slate-300 border-t-slate-300  border-b-slate-300   p-2 w-2/4 shadow-sm text-center mt-4 mb-4 outline-none font-poppins rounded-l-full' placeholder='search' />
            <AiOutlineSearch className='border-r-slate-300 border-r border-t-slate-300 border-t border-b-slate-300 border-b text-[2.71rem]  p-2 rounded-r-full' color='darkgray' />
          </div>
          <ListaProdukti
            clothesReducer={clothesReducer}
            setClicked={setClicked}
            clicked={clicked}
            search={search}
          />
        </Fragment> : <SelektiranProdukt
          clothesReducer={clothesReducer}
          setClicked={setClicked}
          clicked={clicked}
        />}
    </div>
  )
}

export default Sliki