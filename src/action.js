export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const UPDATE_LOGIN = 'UPDATE_LOGIN';

export const VALIDATE = 'VALIDATE';

export function updatePassword(payload) {
  return { type: UPDATE_PASSWORD, payload };
}

export function updateLogin(payload) {
  return { type: UPDATE_LOGIN, payload };
}

export function validate() {
  return { type: VALIDATE };
}

// rickNMorty
export const SET_LOADING = 'SET_LOADING';
export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS';

function updateCharacters(payload) {
  return { type: UPDATE_CHARACTERS, payload };
}
function setLoading() {
  return { type: SET_LOADING };
}
//action creator too
export function getCharacters() {
  return function (dispatch) {
    dispatch(setLoading());
    fetch('https://rickandmortyapi.com/api/character')
      .then((data) => data.json())
      .then((data) => {
        console.log('data ===> ', data.results);
        dispatch(updateCharacters(data.results));
      });
  };
}
