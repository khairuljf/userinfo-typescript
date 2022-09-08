import React from 'react'
import {ContactType}  from '../ContactType';

interface props{
  contact:{
    id:string;
    name:string,
    email:string,
    phone:string | number,
    describe:string
  };
  setContact:React.Dispatch<React.SetStateAction<{
    id:string;
    name: string;
    email: string;
    phone: string | number;
    describe: string;
}>>;
handleContact:React.FormEventHandler;
editMode:{
  editMode:boolean;
  data:ContactType
}
}

const UserForm:React.FC<props> = ({contact, setContact, handleContact, editMode }) => {


  return (
    <>
    <form className='userform' onSubmit={handleContact}>
        <input 
        required
            type="text" 
            value={contact.name? contact.name: editMode.data.name } 
            placeholder="Yor Name "  
            onChange={(e)=> setContact({
              ...contact,
              name:e.target.value
            })}
           
            />


        <input 
            required
            type="email"  
            placeholder="Yor email"
            value={contact.email? contact.email : editMode.data.email} 
            
            onChange={(e)=> setContact({
              ...contact,
              email:e.target.value
            })}
            />


        <input 
        required
            type="text"   
            placeholder="Yor Number"
            value={contact.phone? contact.phone: editMode.data.phone}
            onChange={(e)=> setContact({
              ...contact,
              phone:e.target.value
            })}
             />
        <textarea 
            placeholder='About Yourself'
            value={contact.describe? contact.describe : editMode.data.describe}
            onChange={(e)=> setContact({
              ...contact,
              describe:e.target.value
            })}
              ></textarea>
        <button type='submit'>{!contact.id ? "Add Contact" : "Update"}</button>
    </form>
    </>
  )
}

export default UserForm