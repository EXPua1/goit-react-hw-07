import React from "react";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const contacnts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onDeleteContacts = (id) => {
    console.log("Deleting contact with id:", id);
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contacts}>
      <div>
        <p className={css.descr}>👦 {name}</p>
        <p className={css.descr}>📱 {number}</p>
      </div>

      <button onClick={() => onDeleteContacts(id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
