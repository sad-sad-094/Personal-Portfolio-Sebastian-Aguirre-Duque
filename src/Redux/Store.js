/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './ThemeSlice';
import togglerReducer from './TogglerSlice';


export const Store = configureStore({
  reducer: {
    userTheme: themeReducer,
    changeToggler: togglerReducer,
  },
})

