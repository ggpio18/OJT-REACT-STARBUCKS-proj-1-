import React from 'react'
import { foods } from './data'
import { baseImgUrl } from '../../helpers/functions-general'

const MenuFoods = ({setModalShow, setSubItem}) => {

    const handleShowModal = (item) => {
    setSubItem(item);
    setModalShow(true);
    }

  return (
   
      <div className='mb-10'>
      <h4  className='text-xl font-bold mb-10 border-b border-gray-200 py-5'>Foods</h4>

<div className="grid grid-cols-2 gap-5">
{foods.map((item, key) => (
        <div className='flex gap-6 items-center mb-5' key={key}>
        <img src={`${baseImgUrl}/${item.img}`} alt="" className='rounded-full size-[110px]'onClick={() => handleShowModal(item)} />
        <h5 className='text-based font-bold'>{item.title}</h5>
    </div>
    ))}
    

</div>
    </div>

  )
}

export default MenuFoods
