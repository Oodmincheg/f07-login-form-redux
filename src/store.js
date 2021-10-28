import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  UPDATE_PASSWORD,
  VALIDATE,
  UPDATE_LOGIN,
  UPDATE_CHARACTERS,
  SET_LOADING,
} from './action';

const MIN_LENGTH = 6;

const ERRORS = {
  required: 'This field is required',
  minLength: `This field min length is ${MIN_LENGTH} chars`,
};

function loginReducer(
  state = { login: '', password: '', errorPassword: '', errorLogin: '' },
  action,
) {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, login: action.payload, errorLogin: '' };
    }
    case UPDATE_PASSWORD: {
      return { ...state, password: action.payload, errorPassword: '' };
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

function rickNMortyReducer(state = { characters: [] }, action) {
  switch (action.type) {
    case UPDATE_CHARACTERS: {
      return { ...state, characters: action.payload, loading: false };
    }
    case SET_LOADING: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({ login: loginReducer, rickNMorty: rickNMortyReducer }),
  applyMiddleware(thunk),
);

export default store;
