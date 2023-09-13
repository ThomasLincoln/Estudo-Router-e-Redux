import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logar, deslogar } from '../features/login/loginSlice';
import { Route, Navigate } from 'react-router-dom';

const Login = () => {
  const nomeLogado = useSelector((state) => state.login.nome);
  const logado = useSelector((state) => state.login.logado);
  const dispatch = useDispatch();

  const [nomeDigitado, setNomeDigitado] = useState('');

  const handleLogin = () => {
    if (nomeDigitado.trim() !== '') {
      dispatch(logar(nomeDigitado));
    }
  };

  const handleLogout = () => {
    dispatch(deslogar());
    setNomeDigitado(''); // Limpa a caixa de texto ao deslogar
  };

  return (
    <div>
      {logado ? (
         <Navigate to="/profile" />
      ) : (
        <div>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nomeDigitado}
            onChange={(e) => setNomeDigitado(e.target.value)}
          />
          <button onClick={handleLogin}>Logar</button>
        </div>
      )}
    </div>
  );
};

export default Login;
