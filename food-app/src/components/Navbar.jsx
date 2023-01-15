import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import { TbTruckDelivery} from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side navigation  */}
      <div className=" flex items-center">
        <div className="cursor-pointer" onClick={() => setMenuToggle(!menuToggle)}>
          <AiOutlineMenu size={30} />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-3xl px-2">
          Chakula <span className="font-bold text-[#d08b15]">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-sm">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pick n' pay</p>
        </div>
      </div>
      {/* search  */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px]lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent focus:outline-none p-2 w-full placeholder:text-xs placeholder:tracking-tighter placeholder:block placeholder:w-full' type="text" placeholder='What food do need today?' />
      </div>
      {/* cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2'/>
        cart
      </button>
      {/* mobile menu  */}
      {/* overlay  */}
      {menuToggle ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      {/* side drawer menu  */}
      <div className={menuToggle ? 'fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-300 whitespace-nowrap': 'fixed top-0 left-[-100%] w-[-0px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={() => setMenuToggle(!menuToggle)} size={30} className='absolute top-4 right-4 cursor-pointer' />
        <h2 className='text-2xl p-4'>
          Chakula <span className='font-bold text-[#d08b15]'>Eats</span>
        </h2>
        <ul className='flex flex-col p-4 text-gray-800'>
          <li className='py-4 text-xl flex items-center'>
            <TbTruckDelivery size={25} className='mr-4'/>
            Orders
          </li>
          <li className='py-4 text-xl flex items-center'>
            <MdFavorite size={25} className='mr-4'/>
            Favorites
          </li>
          <li className='py-4 text-xl flex items-center'>
            <FaWallet size={25} className='mr-4'/>
            Wallet
          </li>
          <li className='py-4 text-xl flex items-center'>
            <MdHelp size={25} className='mr-4'/>
            Help
          </li>
          <li className='py-4 text-xl flex items-center'>
            <AiFillTag size={25} className='mr-4'/>
            Promotions
          </li>
          <li className='py-4 text-xl flex items-center'>
            <BsFillSaveFill size={25} className='mr-4'/>
            Chakula Ones
          </li>
          <li className='py-4 text-xl flex items-center'>
            <FaUserFriends size={25} className='mr-4'/>
            Invite Friends
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
