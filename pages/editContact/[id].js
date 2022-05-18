import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../../redux/slices/contactsSlice';
import styles from '../../styles/mySass.module.scss';

const EditContact = () => {
     // router
     const router=useRouter();
     const {id}=router.query;

     // redux dispatch and selector
     const dispatch=useDispatch();
     const contact=useSelector(state=>state.contacts.find(s => s.id ===id));

     // state form data
     const [formData,setFormData]=useState({name:contact.name,number:contact.number});
     const [error,setError]=useState('');
    
     // handle change
     const handleChange=(e)=>{
          setFormData({...formData,[e.target.name]:e.target.value});
          setError('');

     }

     // handle update 
     const handleUpdate=(e)=>{
          e.preventDefault();

          const regex=/^(?:\+88|88)?(01[3-9]\d{8})$/          
          if(regex.test(formData.number)===true){
               if(formData.name&&formData.number){
                    dispatch(
                         updateContact({
                              id:id,
                              name:formData.name,
                              number:formData.number
                         })
                    );
                  
               };
               setFormData({
                    name:'',
                    number:''
               });
               setError('');
               router.push('/contactData');
          } else{
               setError('number is not valid');
          }
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



