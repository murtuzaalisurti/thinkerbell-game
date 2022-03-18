import {createStore} from 'redux';

import {reducer} from './reducers/reducers';

export const configureStore = (state = 2) => {
    return createStore(reducer, state);
}