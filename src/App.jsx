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
import { useSelector } from "react-redux";

const App = () => {
  const contacts = useSelector((state) => state.contacts);
  // const initialContacts = [
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ];
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

  const addContact = (newContact) => {
    contacts((prevContacts) => [...prevContacts, newContact]);
  };

  const onDeleteContacts = (id) => {
    console.log("Deleting contact with id:", id); // Додайте цей лог
    contacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  // const resetContacts = () => {
  //   setContacts(initialContacts);
  //   localStorage.setItem("contacts", JSON.stringify(initialContacts)); // Обновляем локальное хранилище
  // };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Section>
      <Container>
        <ContactForm onAddContact={addContact} />
        <SearchBox value={searchTerm} onSearch={setSearchTerm} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContacts={onDeleteContacts}
        />
        {/* <button onClick={resetContacts}>Сбросить контакты</button> */}
      </Container>
    </Section>
  );
};

export default App;
