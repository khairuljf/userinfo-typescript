import React from 'react'
import {ContactType}  from '../ContactType';

interface props{
    contacts:ContactType[];
    contact:ContactType;
    setCotnacts:React.Dispatch<React.SetStateAction<ContactType[]>>
}


const SingleUser:React.FC<props> = ({contacts, contact, setCotnacts}) => {


    const handleDelete = (id:string)=>{
        setCotnacts(
            contacts.filter((contact)=>{
                return contact.id !== id;
            })
        )
       
    }


  return (
    <>
     <tr>
    <td>{contact.name}</td>
    <td>{contact.email}</td>
    <td>{contact.phone}</td>
    <td>{contact.describe}</td>
    <td>
        <span className='edit'>Edit</span>
        <span className='delete' onClick={()=>handleDelete(contact.id)}>Delete</span>
    </td>
    </tr>
    </>
  )
}

export default SingleUser