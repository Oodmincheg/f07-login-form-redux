import { createStore } from 'redux';
import { UPDATE_PASSWORD, VALIDATE, UPDATE_LOGIN } from './action';

const MIN_LENGTH = 6;

const ERRORS = {
  required: 'This field is required',
  minLength: `This field min length is ${MIN_LENGTH} chars`,
};

function reducer(
  state = { login: '', password: '', errorPassword: '', errorLogin: '' },
  action,
) {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, login: action.payload, errorLogin: '' };
    }
    case UPDATE_PASSWORD: {
      return { ...state, password: action.payload };
    }
    case VALIDATE: {
      let errorLogin = '';
      let errorPassword = '';
      if (state.login.length < MIN_LENGTH) {
        errorLogin = ERRORS.minLength;
      }
      if (!state.login) {
        errorLogin = ERRORS.required;
      }
      if (state.password.length < MIN_LENGTH) {
        errorPassword = ERRORS.minLength;
      }
      if (!state.password) {
        errorPassword = ERRORS.required;
      }
      return { ...state, errorPassword, errorLogin };
    }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
