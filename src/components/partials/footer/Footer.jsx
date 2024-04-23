import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from './links'
import { footerLink2 } from './linkff'

const Footer = () => {
  return (
    <footer className='container ml-auto'>
        <div className='grid grid-cols-5 w-[80%] gap-5'>
        {footerLinks.map((item, key)=>{
        return(
            <div className='footer-link' key={key}>
                <h3 className='mb-12 text-lg'>{item.title}</h3>
                <ul className='opacity-70 space-y-6'>
                    {item.links.map((link, key) => <li key={key}>
                        <Link to={'${link}'}>{link.label}</Link>
                        </li>)}
                </ul>
            </div>
        )
    })}
        
        </div>

        <div className="linkff flex flex-col gap-5 mt-8">
            {footerLink2.map((item, key)=>{
        return(
                <li className='list-none no-underline hover:underline' key={key}><Link to={'${item.link2}'}>{item.contentf}</Link></li>
            )
        })}
         <span className='opacity-70 text-md my-3'>© 2024 Starbucks Coffee Company. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer
