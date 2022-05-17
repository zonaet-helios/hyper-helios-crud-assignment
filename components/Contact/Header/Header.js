import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='navContainer'>
               <div className='subNavContainer'>
                    <h3>Contact App</h3>
                    <Link href='/' className='link'>contact-form</Link>
                    <Link href='/contactData' className='link'>Added-Contacts</Link>
               </div>
               
          </div>
  )                                 
}

export default Header