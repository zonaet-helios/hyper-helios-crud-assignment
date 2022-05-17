import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slices/contactsSlice';
import styles from '../../styles/mySass.module.scss';
import Link from 'next/link';


const Contact = ({contact}) => {
     // destructuring contact
     const {id,name,number}=contact;
     // router
     const router=useRouter()

     // dispatch
     const dispatch=useDispatch();

     // handle go details
     const handleDetails=()=>{
         const url=`/${id}`;
         router.push(url);
     };
     // handle delete
     const handleDelete=()=>{
         dispatch(deleteContact(id));
     //     navigate('/contactData');
     };

     return (
          <div className={styles.singleContact}>
               <h3>Name- {name}</h3>
               <h5>Number- {number}</h5>
               <button onClick={handleDetails} className={styles.button}>Details</button>
               <button onClick={handleDelete} className={styles.button}>Delete</button>
          </div>
  )
}

export default Contact