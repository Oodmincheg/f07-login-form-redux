import { BaseInput } from './components/BaseInput/';
import { useSelector, useDispatch } from 'react-redux';
import { updatePassword, VALIDATE, UPDATE_LOGIN } from './action';

import './App.css';

function App() {
  const login = useSelector((state) => state.login); //state.login
  const errorLogin = useSelector((state) => state.errorLogin);
  const errorPassword = useSelector((state) => state.errorPassword);

  const password = useSelector((state) => state.password); // state.password

  const dispatch = useDispatch();

  function handleLoginChange(event, type) {
    dispatch({ type: UPDATE_LOGIN, payload: event.target.value });
  }

  function handlePasswordChange(event) {
    dispatch(updatePassword(event.target.value));
  }

  function submitLogin() {
    dispatch({ type: VALIDATE });

    // fetch('https://google.com', {
    //   method: 'POST',
    //   body: JSON.stringify({ login, password }),
    // })
    //   .then((data) => data.json())
    //   .then((data) => dispatch({ type: 'lol', payload: data }))
    //   .catch((err) => console.error(err));
  }

  return (
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
  );
}

export default App;
