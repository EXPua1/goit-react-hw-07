import { createSlice, createSelector } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
      localStorage.setItem("contacts", JSON.stringify(state.contacts)); // Зберігайте контакти в localStorage
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      localStorage.setItem("contacts", JSON.stringify(state.contacts)); // Оновіть localStorage після видалення
    },
  },
});

// Экспорт редюсера, экшенов и селектора
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

// Мемоізований селектор
export const selectContacts = createSelector(
  (state) => state.contacts.contacts, // Селектор для отримання контактів
  (contacts) => contacts || [] // Повертає масив контактів або порожній масив
);
