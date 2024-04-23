import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Toast2 = ({setSucccess}) => {
    
    React.useEffect(() => {
        setTimeout(() => {
            setSucccess(false)
        }, 500)
    },[])

  return (
    <div className="toast fixed top-2 left-1/2 -translate-x-1/2 w-[500px] p-2 rounded-md bg-green-100 border-l-2 border-green-800 flex justify-between items-center shadow-md">
        <div className='flex gap-4'>
          <FaCheckCircle className='text-accent text-xl mt-2'/>
          <ul>
            <li><h5 className='font-bold'>Success</h5></li>
            <li><h5 className='text-sm'>Successfully added to Cart!</h5></li>
          </ul>
        </div>

      </div>
  )
}

export default Toast2
