import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/mySass.module.scss';


const Header = () => {

  return (
    <div className={styles.navContainer}>
      <div className={styles.subNavContainer}>
        <h3>Contact App</h3>
        <Link href='/contactForm' className={styles.link}><a>contact-form</a></Link>
        <Link href='/contactData' className={styles.link}><a>Added-Contacts</a></Link>
      </div>
               
    </div>
  )                                 
}

export default Header