import { createSlice, createSelector } from "@reduxjs/toolkit";

// Початковий стан
const INITIAL_STATE = {
  contacts: [],
};

// Створення Slice для контактів
const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Експорт редюсера та екшенів
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

// Мемоізований селектор для отримання контактів
export const selectContacts = createSelector(
  (state) => state.contacts.contacts,
  (contacts) => contacts || []
);
