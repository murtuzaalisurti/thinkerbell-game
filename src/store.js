import { createStore } from "redux";
import {reducer} from "./reducers/reducers.js";

function configureStore(state = {num: 0}) {
  return createStore(reducer, state);
}

export default configureStore;