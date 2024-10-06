import css from './ContactList.module.css'
import Contact from "./Contact";

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} onDeleteContacts={onDeleteContacts} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;