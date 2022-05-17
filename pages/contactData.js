import React from 'react'
import { useSelector } from 'react-redux'
import Contact from '../components/Contact/Contact';
import Header from '../components/Contact/Header/Header';
import styles from '../styles/mySass.module.scss';

const contactData = () => {

    const contacts=useSelector(state=>state.contacts);

  return (
    <div>
        <Header></Header>
        <div className={styles.contactContainer}>
            <div>
                    {/* <h4>total-contacts: {contacts.length}</h4> */}
                    <div className={styles.allContactContainer}>
                        {contacts.map(contact=><Contact
                            key={contact.id} 
                            contact={contact}
                            ></Contact>)
                        }
                    </div>
            </div>
        </div>
    </div>
  )
}

export default contactData