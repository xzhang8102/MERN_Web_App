import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// array of message object would tell the alert type
const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alertEle => alertEle.id !== payload);
    default:
      return state;
  }
}
