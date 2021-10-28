import { BaseInput } from './components/BaseInput/';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const login = useSelector((state) => state.login);
  const password = useSelector((state) => state.password);

  const dispatch = useDispatch();

  function handleLoginChange(event, type) {
    dispatch({ type: 'updateLogin', payload: event.target.value });
  }

  function handlePasswordChange(event) {
    dispatch({ type: 'updatePassword', payload: event.target.value });
  }

  function submitLogin() {
    fetch('https://google.com', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
    })
      .then((data) => data.json())
      .then((data) => dispatch({ type: 'lol', payload: data }))
      .catch((err) => console.error(err));
  }

  return (
    <form>
      <BaseInput
        name="login"
        placeholder="Please enter your login"
        labelText="Login:"
        value={login}
        onChange={handleLoginChange}
      />
      <BaseInput
        name="password"
        type="password"
        placeholder="Please enter your password"
        labelText="Password:"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="button" onClick={submitLogin}>
        Submit login
      </button>
    </form>
  );
}

export default App;
