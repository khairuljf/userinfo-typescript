import React, { useState } from 'react'
import uuid from 'react-uuid';
import {ContactType}  from '../ContactType';

interface props{
  setCotnacts:React.Dispatch<React.SetStateAction<ContactType[]>>
  setContact:React.Dispatch<React.SetStateAction<ContactType>>
  contact:ContactType;
  contacts:ContactType[]
}

const UserForm:React.FC<props> = ({ contact, contacts,  setCotnacts, setContact }) => {



  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault();

    if(contact.id){
      const newContact = {...contact}
        setCotnacts(
          contacts.map((contactList) => (contactList.id === contact.id ? { ...newContact } : contactList))
        );

    }else{

      const newContact  = { ...contact, id:uuid(),  }
      setCotnacts(prevState=> ([ ...prevState, newContact  ]));
    }

   

    contact.id = contact.name = contact.email = contact.phone= contact.describe='';

  } 




  return (
    <>
    <form className='userform' onSubmit={handleSubmit}>
        <input 
        required
            name="name"
            type="text" 
            value={contact.name } 
            placeholder="Yor Name "  
            onChange={(e)=> setContact(prevState=>({
              ...prevState,
              name:e.target.value
            }))}
           
            />


        <input 
            required
            name="email"
            type="email"  
            placeholder="Yor email"
            value={contact.email} 
            
            onChange={(e)=> setContact(prevState=>({...prevState, email:e.target.value}))}

            />


        <input 
        required
        name="phone"
            type="text"   
            placeholder="Yor Number"
            value={contact.phone}
            onChange={(e)=> setContact(prevState=>({
              ...prevState,
              phone:e.target.value
            }))}
             />

        <textarea 
            name="describe"
            placeholder='About Yourself'
            value={contact.describe}
            onChange={(e)=> setContact(prevState=>({
              ...prevState,
              describe:e.target.value
            }))}
              ></textarea>
        <button type='submit'>{!contact.id ? "Add Contact" : "Update"}</button>
    </form>
    </>
  )
}

export default UserForm