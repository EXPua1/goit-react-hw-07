const INITIAL_STATE = {
  contacts: JSON.parse(localStorage.getItem("contacts")) ?? [],
};
export const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contacts/addContact": {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case "contacts/deleteContacts": {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};

//contacts/addContact
//contacts/deleteContact
