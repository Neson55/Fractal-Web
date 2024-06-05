import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export interface StorageSliceState {
  inputValue: string
  inputValueRepo: string
}

const initialState: StorageSliceState = {
  inputValue: "",
  inputValueRepo: "",
}

export const storageSlice = createSlice({
  name: "storage",

  initialState,

  reducers: {
    addInAddressBar: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload
    },
    addInAddressBarRepo: (state, action: PayloadAction<string>) => {
      state.inputValueRepo = action.payload
    },
  },
  selectors: {
    selectName: counter => counter.inputValue,
    selectNameRepo: counter => counter.inputValueRepo,
  },
})

export const { addInAddressBar, addInAddressBarRepo } = storageSlice.actions

export const { selectName, selectNameRepo } = storageSlice.selectors
