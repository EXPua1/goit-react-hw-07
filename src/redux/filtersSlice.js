import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "", // Зміна ключа з filter на name
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload; // Зміна значення фільтра
    },
  },
});

// Селектор для отримання значення фільтра
export const selectNameFilter = (state) => state.filter.name;

// Експорт редюсера, екшена і селектора
export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
