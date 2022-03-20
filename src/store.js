import reducer from './redux-toolkit/aSlice';

import {configureStore} from '@reduxjs/toolkit';

import { devToolsEnhancer } from 'redux-devtools-extension';

const store = configureStore({
  reducer: {
    rootReducer: reducer
  }
}, devToolsEnhancer());

export default store;