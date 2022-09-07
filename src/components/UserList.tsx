import { constants } from 'buffer';
import React from 'react'
import {ContactType}  from '../ContactType';
import SingleUser from './SingleUser';

interface props{
    contacts:ContactType[];
    setCotnacts:React.Dispatch<React.SetStateAction<ContactType[]>>
};

const UserList:React.FC<props> = ({contacts, setCotnacts}) => {

  return (
      <>
        <table className='user-table'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Details</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
           
              {

          contacts.map(contact=> <SingleUser key={contact.id} contact={contact}  contacts={contacts}  setCotnacts={setCotnacts}/>)

                // contacts.map((item)=>{
                //   return(
                //         <SingleUser />
                //   )
                // })
              }
          
          </tbody>
        </table>
      </>
  )
}

export default UserList