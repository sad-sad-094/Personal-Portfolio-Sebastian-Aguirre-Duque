/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './ThemeSlice';


export const Store = configureStore({
  reducer: {
    userTheme: themeReducer,
  },
})

