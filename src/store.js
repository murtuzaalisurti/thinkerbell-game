import reducer from './redux-toolkit/aSlice';

import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    rootReducer: reducer
  }
});

export default store;