import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormState } from '../../components/ContactForm'

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
    addContact: (state, action: PayloadAction<IFormState>) => {
      state.contactList = [...state.contactList, action.payload]
    },
    updateContact: (state, action: PayloadAction<IFormState>) => {
      state.contactList = state.contactList.map(contact => contact.id === action.payload.id ? action.payload : contact)
    }
  }
})

export const { addContact, updateContact } = contactsSlice.actions;

export default contactsSlice.reducer