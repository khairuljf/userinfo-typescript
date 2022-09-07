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

  const [editMode, setEditMode]= useState({
    editMode:false,
    data:{}
  });

  console.log(editMode)

 

  const handleContact = (e:React.FormEvent)=>{
      e.preventDefault();
      
      const newContact= {...contact, id:uuid()}
    
      setCotnacts(prevState => [...prevState,newContact]);

      contact.id = '';
      contact.name = '';
      contact.email = '';
      contact.phone = '';
      contact.describe = '';


  }



  return (
    <div className="App">
          <header>
            <h1 className='text-center'>User Info</h1>
          </header>
          <div className='main-content'>
               <UserForm setContact={setContact} contact={contact} handleContact={handleContact}   />
              <div className="result">
                  <UserList contacts={contacts} setCotnacts={setCotnacts} setEditMode={setEditMode} />
              </div>
          </div>
    </div>

  );
}

export default App;
