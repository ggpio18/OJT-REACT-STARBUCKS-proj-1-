import React from 'react'
import Header from '../../partials/Header'
import HomeCards from './HomeCards'
import { data } from './data'
import Footer from '../../partials/footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>

         <div className='max-w-[1500px] w-full mx-auto px-4'>
         {data.map((item, key)=><HomeCards item={item} key={key}/>)}

         </div>   
         <Footer/>
    </div>
  )
}

export default Home
