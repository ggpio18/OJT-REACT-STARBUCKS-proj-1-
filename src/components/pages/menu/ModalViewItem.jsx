import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import { baseImgUrl } from '../../helpers/functions-general';
import { GiCoffeeCup } from "react-icons/gi";


const ModalViewItem = ({setModalShow, subItem, setcartItem, cartItem, setSucccess}) => {
 
    const handleClose = () => setModalShow(false);
    const handleAddtoCart = (item =>{
        setcartItem([...cartItem,item])
        setSucccess(true);
    })

  return (
    <div>
      <div className='modal fixed inset-0 flex justify-center items-center isolate'>
            <div className="backdrop h-screen w-full bg-black/40 absolute top-0 left-0 z-[-1]"></div>
            <div className="modal__main max-w-[900px] w-full bg-white rounded-md">
                <div className='p-4 flex justify-between items-center border-b border-gray-300'>
                <h4 className='mb-0 flex gap-2 items-center font-bold'><GiCoffeeCup className='text-xl' />{subItem.title}</h4>
                    <button className='text-2xl' onClick={handleClose}><LiaTimesSolid /></button>
                </div>

                <div className='grid grid-cols-4 gap-5 px-4 py-10 max-h-[580px] h-full overflow-auto'>

                {subItem.subItem.map((item, key) => (
                <button onClick={() => handleAddtoCart(item)} key={key}>
                <div className='item__card flex flex-col items-center' key={key}>
                    <img src={`${baseImgUrl}/${item.img}`} alt="" className='size-[110px] rounded-full' />
                    <h4 className='font-bold text-center'>{item.title}</h4>
                    <small>{item.category}</small>
                </div>
                </button>

                ))}

                
                </div>

            </div>

            
      </div>
    </div>
  )
}

export default ModalViewItem
