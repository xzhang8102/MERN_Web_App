import axios from 'axios';
import { REGISTER_FAIL, REGISTER_SUCCESS } from './types';
import { setAlert } from './alert';

// Register User
export const register = ({ name, email, password }) => {
  return async dispatch => {
    const config = {
      headers: { 'Content-Type': 'application/json' }
    };
    const body = JSON.stringify({ name, email, password });
    try {
      const response = await axios.post('/api/users', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data
      });
    } catch (err) {
      // console.error(err);
      const errors = err.response.data.errors;
      // errors would be undefined if it is server error
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch({ type: REGISTER_FAIL });
    }
  };
};
