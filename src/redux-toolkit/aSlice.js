import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  words: ['hello', 'murtuza']
}

export const Slice = createSlice({
  name: 'rootSlice',
  initialState,
  reducers: {
    updateWords: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.words = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateWords } = Slice.actions

export default Slice.reducer