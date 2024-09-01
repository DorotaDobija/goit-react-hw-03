import { useEffect, useState } from 'react'
import './App.css'
import { ContactList } from './ContactList/ContactList'
import { SearchBox } from './SearchBox/SearchBox'
import { ContactForm } from './ContactForm/ContactForm'

export const App = () => {

const [contacts, setContacts] = useState(() => {
  const savedContact = window.localStorage.getItem("saved-contact");

  if (savedContact !== null ) {
    return JSON.parse(savedContact)}

    return []
});
const [searchContact, setSearchContact] = useState('')


useEffect(() => {
  window.localStorage.setItem("saved-contact", JSON.stringify(contacts))
}, [contacts])
const handleChange = (e) => {
  setSearchContact(e.target.value)
}

const addContact = (newContact) => {
  setContacts((prev) => {
    return [...prev, newContact]
  })
}

const deleteContact = (contactId) => {
  setContacts((prev) => {
return prev.filter((contact) => 
  contact.id !== contactId
)
  })
}

const contactToRender = contacts.filter((contact) => contact.name.toLowerCase().includes(searchContact.toLowerCase()));


  return (
    <div>
    <h1>Phonebook</h1>
    <ContactForm onAdd={addContact}/>
    <SearchBox handleChange={handleChange} value={searchContact}/>
    <ContactList contacts={contactToRender} onDelete={deleteContact}/>
  </div>
  )
}


