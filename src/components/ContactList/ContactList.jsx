import css from "./ContactList.module.css";
import Contact from "./Contact";
import { useSelector } from "react-redux";

const ContactList = ({ contacts, onDeleteContacts }) => {
  const filter = useSelector((state) => state.filter.filter);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDeleteContacts={onDeleteContacts}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
