import React from 'react'
import ContactCard from './ContactCard'
import {Link} from 'react-router-dom'
const ContactList = (props) => {
const deleteContactHandller =(id)=>{
  props.getContactId(id)
};
  return (
    <div>
      <div>
      <h2>Contact List</h2>
      <Link to='/add'>
      <button>Add Contact</button>
      </Link>
     
      </div>
      
      {props.contacts.map((contact) =>
      <ContactCard contact={contact} clickHandller={deleteContactHandller}></ContactCard>
      )}
    </div>
  )
}

export default ContactList