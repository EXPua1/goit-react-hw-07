const INITIAL_STATE = {
  users: JSON.parse(localStorage.getItem("contacts")) ?? [],
};
export const contactsReducer = (state = INITIAL_STATE, action) => {
  return state;
};
