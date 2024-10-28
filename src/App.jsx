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

const App = () => {
  return (
    <Section>
      <Container>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Container>
    </Section>
  );
};

export default App;
