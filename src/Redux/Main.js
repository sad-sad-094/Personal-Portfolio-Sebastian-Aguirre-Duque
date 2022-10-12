/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logInReducer, videosReducer } from '../Reducers/Reducers';
import { configureStore } from '@reduxjs/toolkit'




if (process.env.NODE_ENV !== 'production') {

  // const r = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const Store = configureStore({
    userLanguage: languageReducer
  }) 
  // r(applyMiddleware())
  

} else {
  
  Store = createStore(
    combineReducers(
      {
        userLogIn: logInReducer,
        ManVideos: videosReducer
      }
    )
  )
  
}


export default Store;

