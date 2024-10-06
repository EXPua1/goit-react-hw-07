import React from 'react';
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContacts }) => {
  return (
    <div className={css.contacts}>
      <div>
        <p className={css.descr}>👦 {name}</p>
        <p className={css.descr}>📱 {number}</p>
      </div>
      
      <button onClick={() => onDeleteContacts(id)} type='button'>Delete</button>
    </div>
  );
};

export default Contact;
