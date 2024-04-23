import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import { baseImgUrl } from '../../helpers/functions-general';
import { GiCoffeeCup } from "react-icons/gi";
import { BsCartX, BsFillCartCheckFill } from "react-icons/bs";
import { FaTrash } from 'react-icons/fa';


const ModalCart = ({setCartShow, cartItem, setcartItem}) => {

    const getSubTotal = cartItem.reduce(
        (a, c) => a + Number(c.price),
        0,
     );

    const handleClose = () => setCartShow(false);
    const emptyCart = () => setcartItem([]);
    const handleRemoveItem = (itemToRemove) => {
        // cartItem.filter(cart => cart.title !== item.title)
        const updatedCartItems = cartItem.filter(
            (item) => item.title !== itemToRemove.title
          );
          setcartItem(updatedCartItems);
    };

  return (
    <div className='modal fixed inset-0 flex justify-end items-center isolate'>
        <div className="backdrop h-screen w-full bg-black/40 absolute top-0 left-0 z-[-1]"></div>
        <div className="modal__main max-w-[400px] w-full h-screen bg-white">
            <div className='p-4 flex justify-between items-center border-b border-gray-300'>
                <h4 className='mb-0 flex gap-2 items-center font-bold'><BsFillCartCheckFill className='text-xl text-accent text-4xl'/> Cart</h4>
                <div className='flex gap-4'>
                <button className='text-2xl' onClick={handleClose}><LiaTimesSolid/></button>

                {cartItem.length !== 0 && (
                <button className='text-xl' onClick={emptyCart}><FaTrash/></button>
            )}

                </div>
            </div>

            <div className="px-4 py-10 max-h-[780px] h-full overflow-auto">
            {cartItem.map((item, key) => (

                <div className="cartItem mb-5 flex gap-5 items-center" key={key}>
                    <img src={`${baseImgUrl}/${item.img}`} alt=""  className='rounded-full size-[80px]'/>
                    <div>
                        <h4 className='font-bold'>{item.title}</h4>
                        <p>{item.price}</p>
                    </div>

                    <button onClick={() => handleRemoveItem(item)}>remove</button>
                </div>
                 ))}

                 {cartItem.length === 0 && (
                    <div className='emptyCart flex justify-center flex-col items-center'>
                        <BsCartX className='text-[80px] opacity-50'/>
                        <h3 className='font-bold opacity-25'>Cart Empty</h3>
                    </div>
                 )}
                
            </div>

            <ul className='p-4 bg-accent text-white rounded-md flex justify-between text-xl mx-2'>
                    <li className='font-bold '>Total</li>
                    <li>Php {getSubTotal.toFixed(2)}</li>
                </ul>
        </div>
    </div>
  )
}

export default ModalCart
