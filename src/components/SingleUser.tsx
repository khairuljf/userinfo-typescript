import React from 'react'
import {ContactType}  from '../ContactType';

interface props{
    contacts:ContactType[];
    contact:ContactType;
    setCotnacts:React.Dispatch<React.SetStateAction<ContactType[]>>;
    setEditMode:React.Dispatch<React.SetStateAction<{
        editMode: boolean;
        data: ContactType;
    }>>
}


const SingleUser:React.FC<props> = ({contacts, contact, setCotnacts, setEditMode}) => {


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
        <span className='edit' onClick={(e)=> setEditMode({
              editMode:true,
              data:{...contact}
            })}>Edit</span>
        <span className='delete' onClick={()=>handleDelete(contact.id)}>Delete</span>
    </td>
    </tr>
    </>
  )
}

export default SingleUser