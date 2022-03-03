import React, { useState, useEffect } from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const local_key = "contacts"
  const [contacts, setContacts] = useState([])

  const addContactHandller = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }])
    // console.log(contacts)
  }
  useEffect(() => {
    const retriveContact = JSON.parse(localStorage.getItem(local_key))
    if (retriveContact)
      setContacts(retriveContact)
  }, [])
  useEffect(() => {
    localStorage.setItem(local_key, JSON.stringify(contacts))
  }, [contacts])
  const removeHandller = (id) => {

    const newlist = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newlist)
  }
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<ContactList contacts={contacts} getContactId={removeHandller}></ContactList>} />

          <Route exact path="/add" element={<AddContact addContactHandller={addContactHandller}></AddContact>} />
        </Routes>
      </Router>

    </>
  )
}

export default App