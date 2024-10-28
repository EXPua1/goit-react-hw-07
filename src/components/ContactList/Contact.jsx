import React from "react";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.userData.contacts);

  const onDeleteContacts = (id) => {
    console.log("Deleting contact with id:", id); // Додайте цей лог
    const action = {
      type: "contacts/deleteContacts",
      payload: id,
    };
    dispatch(action);
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
