import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import {ContactType}  from './ContactType';

function App() {

  const [contact, setContact] = useState<ContactType>({
      id:'',
      name:'',
      email:'',
      phone:'',
      describe:''
    });
  const [contacts, setCotnacts] = useState<ContactType[]>([]);

  const [editMode, setEditMode]= useState<{editMode:boolean,data:ContactType}>({
    editMode:false,
    data:{
      id:'',
      name:'',
      email:'',
      phone:'',
      describe:''
    }
  });

  if(editMode.editMode){
    setContact({...editMode.data})
    setEditMode({
      editMode:false,
      data:{
        id:'',
        name:'',
        email:'',
        phone:'',
        describe:''
      }
    })
  }

  
 

  const handleContact = (e:React.FormEvent)=>{
      e.preventDefault();
      

      if(contact.id){

        const newContact = {...contact}
        setCotnacts(
          contacts.map((contactList) => (contactList.id === contact.id ? { ...newContact } : contactList))
        );

        setEditMode({
          editMode:false,
          data:{
            id:'',
            name:'',
            email:'',
            phone:'',
            describe:''
          }
        })

        contact.id = '';
        contact.name = '';
        contact.email = '';
        contact.phone = '';
        contact.describe = '';

      }else{

      const newContact= {...contact, id:uuid()}
    
      setCotnacts(prevState => [...prevState,newContact]);

      contact.id = '';
      contact.name = '';
      contact.email = '';
      contact.phone = '';
      contact.describe = '';

      }





  }



  return (
    <div className="App">
          <header>
            <h1 className='text-center'>User Info</h1>
          </header>
          <div className='main-content'>
               <UserForm setContact={setContact} contact={contact} handleContact={handleContact} editMode={editMode}  />
              <div className="result">
                  <UserList contacts={contacts} setCotnacts={setCotnacts} setEditMode={setEditMode} />
              </div>
          </div>
    </div>

  );
}

export default App;
