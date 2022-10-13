/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    lightTheme: (state) => {
      state.theme = 'light'
    },
    darkTheme: (state) => {
      state.theme = 'dark'
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

export default themeSlice.reducer;

export const { lightTheme, darkTheme, setTheme } = themeSlice.actions;
