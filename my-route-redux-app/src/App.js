import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loggIn, loggOut} from './slice/loginSlice'; // Importe as ações

function App() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Disparar a ação de login
    dispatch(loggIn({ id: 1, username: 'exampleUser' }));
  };

  const handleLogout = () => {
    // Disparar a ação de logout
    dispatch(loggOut());
  };

  return (
    <div>
      <p>Usuário: {user ? user.username : 'Não logado'}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;