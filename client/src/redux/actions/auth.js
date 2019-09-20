import axios from 'axios';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';
import { setAlert } from './alert';
import setAuthToken from './util/setAuthToken';

// Grab user's data with jwt token
export const loadUser = () => {
  return async dispatch => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };
};

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
      // After receiving the token
      dispatch(loadUser());
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

// Login User
export const login = (email, password) => {
  return async dispatch => {
    const config = {
      headers: { 'Content-Type': 'application/json' }
    };
    const body = JSON.stringify({ email, password });
    try {
      const responese = await axios.post('/api/auth', body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: responese.data
      });
      // After receiving the token
      dispatch(loadUser());
    } catch (err) {
      // console.error(err);
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
};

// Log out user
export const logout = () => {
  return {
    type: LOGOUT
  };
};
