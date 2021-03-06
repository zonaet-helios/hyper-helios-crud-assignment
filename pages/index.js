import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addContact } from '../redux/slices/contactsSlice';
import { nanoid } from '@reduxjs/toolkit'
import styles from '../styles/mySass.module.scss';
import Header from '../components/Contact/Header/Header';

const contactForm = () => {
    const [formData,setFormData]=useState({});
    const [error, setError] = useState('');
    

    // redux dispatch
    const dispatch = useDispatch();
    const contacts=useSelector(state=>state.contacts);

     //   handleChange  
     const handleChange=(e)=>{
          setFormData({...formData,[e.target.name]:e.target.value});
          setError('')
     }

     // handle submit
     const handleSubmit=(e)=>{
          e.preventDefault();

          const regex=/^(?:\+88|88)?(01[3-9]\d{8})$/               
          if(regex.test(formData.number)===true){
               if(formData.name&&formData.number){
                    dispatch(addContact({
                         id: nanoid(),
                         name:formData.name,
                         number:formData.number})
                    );
                  
               };
               setFormData({
                    name:'',
                    number:''
               });
               setError('');
          } else{
               setError('number is not valid');
          }
          /* else if(!regex.test(formData.number) && formData.number !== ""){
               setError('number is not valid')

          }else{
               

          } */
          

        
     };


  return (
    <div>
         <Header></Header>
        <div className={styles.container}>
               <div class={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                         <input 
                              type="text" 
                              name="name"
                              value={formData.name}  
                              id=""
                              placeholder='your name'
                              onChange={handleChange}
                              required    
                         />
                         <br />
                         <input 
                              type="number" 
                              name="number"
                              value={formData.number} 
                              id="" 
                              placeholder='your number'
                              onChange={handleChange}
                              /* pattern = "^(?:\\+88|88)?(01[3-9]\\d{8})$" */
                              required
                         />
                         <br />
                         {/* error */}
                         {error&&<h4>this is not valid number</h4>}
                         <button type='submit' className={styles.button}>Add Contact</button>
                    </form>
                    {contacts.length} 
               </div>
               
          </div>
    </div>
  )
}

export default contactForm