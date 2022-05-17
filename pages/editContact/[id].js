import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../../redux/slices/contactsSlice';
import styles from '../../styles/mySass.module.scss';

const EditContact = () => {
     // router
    const router=useRouter();
    const {id}=router.query;

    const contact=useSelector(state=>state.contacts.find(s => s.id ===id));

    // state form data
    const [formData,setFormData]=useState({name:contact.name,number:contact.number});
    const [error,setError]=useState('');
    
    // handle change
    const handleChange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newValue={...formData};
        newValue[field]=value;
        setFormData(newValue);
    }


    const dispatch=useDispatch();


    // handle contact update
    const handleUpdate=(e)=>{
    e.preventDefault();
    if(formData.name&&formData.number){
          dispatch(
              updateContact({
                    id:id,
                    name:formData.name,
                    number:formData.number
              })
          );
    }
    
    router.push('/contactData');
  };


  return (
    <div className={styles.container}>
             
               <div className={styles.formContainer}>
                    <div>
                         <h4>Edit Contact</h4>
                    </div>
                    <form className={styles.form} onSubmit={handleUpdate}>
                         <input 
                              type="text" 
                              name="name"
                              defaultValue={contact.name}  
                              id=""
                              placeholder='your name'
                              onChange={handleChange}
                              required    
                         />
                         <br />
                         <input 
                              type="number" 
                              name="number"
                              defaultValue={contact.number} 
                              id="" 
                              placeholder='your number'
                              onChange={handleChange}
                              // pattern = "^(?:\\+88|88)?(01[3-9]\\d{8})$"
                              required
                         />
                         <br />
                         {error&&<h3>this is error</h3>}
                         <button type='submit' className={styles.button}>Submit</button>
                    </form>
               </div>
          </div>
  )
}

export default EditContact;