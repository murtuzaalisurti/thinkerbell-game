import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  console.log(`reducer`);

  if(action.type === 'CHANGE_STATE'){
    return state + 4;
  }

  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log('current state ', store.getState());
})

store.dispatch({
  type: 'CHANGE_STATE'
});


ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
