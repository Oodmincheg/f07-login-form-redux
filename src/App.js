import { useEffect } from 'react';
import { BaseInput } from './components/BaseInput/';
import { useSelector, useDispatch } from 'react-redux';
import { updatePassword, validate, updateLogin, getCharacters } from './action';

import './App.css';

function App() {
  const login = useSelector(function (state) {
    return state.login.login;
  }); //state.login
  const errorLogin = useSelector(({ login }) => login.errorLogin);
  const errorPassword = useSelector((state) => state.login.errorPassword);
  const password = useSelector((state) => state.login.password); // state.password
  const characters = useSelector((state) => state.rickNMorty.characters);
  const loading = useSelector((state) => state.rickNMorty.loading);

  const dispatch = useDispatch();

  function handleLoginChange(event) {
    dispatch(updateLogin(event.target.value));
  }

  function handlePasswordChange(event) {
    dispatch(updatePassword(event.target.value));
  }

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  function submitLogin() {
    dispatch(validate());
    // dispatch(getData())
    // fetch('https://google.com', {
    //   method: 'POST',
    //   body: JSON.stringify({ login, password }),
    // })
    //   .then((data) => data.json())
    //   .then((data) => dispatch({ type: 'lol', payload: data }))
    //   .catch((err) => console.error(err));
  }

  return (
    <>
      <form>
        <BaseInput
          name="login"
          placeholder="Please enter your login"
          labelText="Login:"
          value={login}
          onChange={handleLoginChange}
          error={errorLogin}
        />
        <BaseInput
          name="password"
          type="password"
          placeholder="Please enter your password"
          labelText="Password:"
          value={password}
          onChange={handlePasswordChange}
          error={errorPassword}
        />
        <button type="button" onClick={submitLogin}>
          Submit login
        </button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        characters.map((char) => <div>{char.name}</div>)
      )}
    </>
  );
}

export default App;
