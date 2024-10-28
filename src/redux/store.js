import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./users/contactsReducer";

export const store = configureStore({
  reducer: {
    userData: contactsReducer,
  },
});
