import React from 'react'

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
}

const UserForm:React.FC<props> = ({contact, setContact, handleContact }) => {



  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const firstName = e.target.name;
    const nameVal = e.target.value;


    setContact({
      ...contact,
      name:nameVal
    })

    console.log(nameVal)

    };


  return (
    <>
    <form className='userform' onSubmit={handleContact}>
        <input 
            type="text" 
            value={contact.name} 
            placeholder="Yor Name "  
            onChange={(e)=> setContact({
              ...contact,
              name:e.target.value
            })}
           
            />


        <input 
            type="email"  
            placeholder="Yor email"
            value={contact.email} 
            
            onChange={(e)=> setContact({
              ...contact,
              email:e.target.value
            })}
            />


        <input 
            type="text"   
            placeholder="Yor Number"
            value={contact.phone}
            onChange={(e)=> setContact({
              ...contact,
              phone:e.target.value
            })}
             />
        <textarea 
            placeholder='About Yourself'
            value={contact.describe}
            onChange={(e)=> setContact({
              ...contact,
              describe:e.target.value
            })}
              ></textarea>
        <button type='submit'>Add Contact</button>
    </form>
    </>
  )
}

export default UserForm