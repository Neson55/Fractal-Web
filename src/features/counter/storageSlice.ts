import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"


export interface StorageSliceState {
 inputValue: string
 inputValueRepo: string
}

const initialState: StorageSliceState = {
  inputValue: '',
  inputValueRepo: '',
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const storageSlice = createSlice({
  name: "storage",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addInAddressBar: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;  // Directly add the payload
    },
    addInAddressBarRepo: (state, action: PayloadAction<string>) => {
      state.inputValueRepo = action.payload;  // Directly add the payload
    },


  },
  selectors: {
    selectName: counter => counter.inputValue,
    selectNameRepo: counter => counter.inputValueRepo,
   
  },
})

// Action creators are generated for each case reducer function.
export const {addInAddressBar, addInAddressBarRepo} =
storageSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectName, selectNameRepo } = storageSlice.selectors


