import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  words: [],
  upcomingWords: [],
  typedWord: [],
  startTyping: 0,
  endTyping: 0,
  wordTypeSpeed: 0,
  wordTypeSpeedSeconds: 0,
  score: 0,
  multiplier: 1,
  isGameOver: false
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
    removeCurrentWord: (state, action) => {
      return {
        ...state,
        words: action.payload
      }
    },
    updateUpcomingWords: (state, action) => {
      return {
        ...state,
        upcomingWords: action.payload
      }
    },
    updateTypedWord: (state, action) => {
      return {
        ...state,
        typedWord: action.payload
      }
    },
    updateTypedWord_RemoveLetter: (state, action) => {
      return {
        ...state,
        typedWord: action.payload
      }
    },
    removeWord: (state, action) => {
      return {
        ...state,
        typedWord: []
      }
    },
    updateStartedTypingTime: (state, action) => {
      return {
        ...state,
        startTyping: action.payload
      }
    },
    updateEndedTypingTime: (state, action) => {
      return {
        ...state,
        endTyping: action.payload
      }
    },
    updateWordTypeSpeed: (state, action) => {
      return {
        ...state,
        wordTypeSpeed: action.payload
      }
    },
    updateWordTypeSpeedSeconds: (state, action) => {
      return {
        ...state,
        wordTypeSpeedSeconds: action.payload
      }
    },
    updateScore: (state, action) => {
      return {
        ...state,
        score: state.score + (Math.round(20 - state.wordTypeSpeedSeconds)*state.multiplier)
      }
    },
    updateMultiplier: (state, action) => {
      return {
        ...state,
        multiplier: action.payload
      }
    },
    setIsGameOver: (state, action) => {
      return {
        ...state,
        isGameOver: action.payload
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateWords, updateUpcomingWords, updateTypedWord, updateTypedWord_RemoveLetter, removeWord, updateEndedTypingTime, updateStartedTypingTime, updateWordTypeSpeed, updateWordTypeSpeedSeconds, removeCurrentWord, updateScore, updateMultiplier, setIsGameOver } = Slice.actions

export default Slice.reducer