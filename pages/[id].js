import React from 'react';
import {useSelector} from 'react-redux';
import styles from '../styles/mySass.module.scss';
import { useRouter } from 'next/router'



const SingleContact = () => {
     // useRouter
     const router=useRouter();
     const {id}=router.query;
     console.log(id)

     // selector
     const contact=useSelector(state=>state.contacts.find(s => s.id ===id));
     console.log(contact)

     // editpage go handle
     const goEdit=()=>{
          const url=`/editContact/${contact.id}`;
          router.push(url);
     };

     
     if (!contact) {
          return (
            <section>
              <h2>contact not found!</h2>
            </section>
          )
        }

     return (
          <div>
               <div className={styles.contactDetails}>
                    <div>
                         <h2>Details</h2>
                         <div className={styles.singleContact}>
                              <h3>Name- {contact.name}</h3>
                              <h5>Number- {contact.number}</h5>
                              <button onClick={goEdit} className={styles.button}>Edit contact</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SingleContact;