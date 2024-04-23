import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../../helpers/functions-general'

const HomeCards = ({item}) => {
  return (
    <div className={`flex h-full mb-10 mt-10 ${item.isImgContent ? "" : "flex flex-row-reverse"} ${item.bg}`}>
        <img src={`${baseImgUrl}/${item.img}`} alt=""  className='flex-auto w-[50%] object-contain' />
        <div className="content h-full flex flex-col text-center items-center self-center p-10 flex-auto w-[50%]">
            <h2>{item.title}</h2>
            <p className='text-2xl max-w-[600px] mx-auto mb-6'>{item.content}</p>
            <Link to={'${item.link}'} className='btn btn-outline'> {item.linkLabel}</Link>
        </div>
    </div>
  )
}

export default HomeCards
