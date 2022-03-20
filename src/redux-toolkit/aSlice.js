import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  words: [],
  upcomingWords: []
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
      return {
        ...state,
        words: state.words.concat(action.payload)
      }
    },
    updateUpcomingWords: (state, action) => {
      return {
        ...state,
        upcomingWords: action.payload
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateWords, updateUpcomingWords } = Slice.actions

export default Slice.reducer