import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface contactListInitialState {
  contactList: Array<any>;
}

const initialState: contactListInitialState = {
  contactList: []
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<object>) => {
      state.contactList = [...state.contactList, action.payload]
    }
  }
})

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer