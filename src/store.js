import { createStore } from 'redux';

function reducer(state = { login: '', password: '' }, action) {
  switch (action.type) {
    case 'updateLogin': {
      return { ...state, login: action.payload };
    }
    case 'updatePassword': {
      return { ...state, password: action.payload };
    }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
