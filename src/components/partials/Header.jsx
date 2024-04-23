import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './svg/Logo'
import { LuShoppingCart } from "react-icons/lu";


const Header = ({setCartShow, cartItem}) => {

    const handleShowCart = () => setCartShow(true)
  return (
    <div>
        <header className='py-5 border-b border-grey-200 shadow-sm'>
            <div className="px-10 flex justify-between items-center ">
                <ul className='flex gap-10 items-center'>
                    <li>
                        <Link to="/home">
                            <Logo size="50px"/>
                        </Link>
                    </li>

                    <li>
                        <Link to="/menu" className='font-bold uppercase hover:text-accent'>Menu</Link>
                    </li>
                    <li>
                        <Link to="/menu" className='font-bold uppercase hover:text-accent'>Rewards</Link>
                    </li>
                    <li>
                        <Link to="/menu" className='font-bold uppercase hover:text-accent'>GiftCards</Link>
                    </li>

                </ul>

                {cartItem !== undefined && (<button className='text-2xl relative' onClick={handleShowCart} >
                       {cartItem.length !== 0 && (
                       <span className='size-4 rounded-full bg-red-600 text-white absolute -top-1 -left-[5px] text-[10px] grid place-content-center'>{cartItem.length}</span>
                        )} 
                    <LuShoppingCart />
                </button>)}
            </div>
            
        </header>
    </div>
  )
}

export default Header

// <LuShoppingCart />'