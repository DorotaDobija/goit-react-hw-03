import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css'

export const ContactList = ({contacts, onDelete}) => {
    return (
        <ul className={css.contact_list}>
{contacts.map((contact) => {
    return <li key={contact.id}>
<Contact name={contact.name} number={contact.number} id={contact.id} onDelete={onDelete}/>
</li>
})}
     </ul>
    )
}