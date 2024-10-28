import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import {
  Container,
  Section,
  ContactList,
  SearchBox,
  ContactForm,
} from "./components";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.userData.contacts);
  const [searchTerm, setSearchTerm] = useState("");
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   return savedContacts ? savedContacts : initialContacts; // Используем сохраненные контакты или начальные
  // });

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (savedContacts) {
  //     setContacts(savedContacts);
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const resetContacts = () => {
  //   setContacts(initialContacts);
  //   localStorage.setItem("contacts", JSON.stringify(initialContacts)); // Обновляем локальное хранилище
  // };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(contacts);
  return (
    <Section>
      <Container>
        <ContactForm />
        <SearchBox value={searchTerm} onSearch={setSearchTerm} />
        <ContactList contacts={filteredContacts} />
        {/* <button onClick={resetContacts}>Сбросить контакты</button> */}
      </Container>
    </Section>
  );
};

export default App;
