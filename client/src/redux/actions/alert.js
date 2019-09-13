import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

export const setAlert = (msg, alertType, timeToDimiss = 5000) => {
  return dispatch => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: {
        id,
        msg,
        alertType
      }
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id
        }),
      timeToDimiss
    );
  };
};
