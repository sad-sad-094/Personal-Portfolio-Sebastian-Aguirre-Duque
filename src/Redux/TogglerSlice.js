/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { createSlice } from '@reduxjs/toolkit';
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';

const initialState = {
  toggler: <BsMoonFill />,
}

const togglerSlice = createSlice({
  name: 'toggler',
  initialState,
  reducers: {
    lightToggler: (state) => {
      state.toggler = <BsMoonFill />
    },
    darkToggler: (state) => {
      state.toggler = <BsFillSunFill/>
    },
  },
})

export default togglerSlice.reducer;

export const { lightToggler, darkToggler } = togglerSlice.actions;