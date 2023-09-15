import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";

import { logar } from "../features/login/loginSlice";
import Button from "../style/Button";
import { LoginContainer } from "../style/LoginPage";

const Login = () => {
  const logado = useSelector((state) => state.login.logado);
  const dispatch = useDispatch();

  const [nomeDigitado, setNomeDigitado] = useState("");

  const handleLogin = () => {
    if (nomeDigitado.trim() !== "") {
      dispatch(logar(nomeDigitado));
    }
  };

  return (
    <div>
      {logado ? (
        <Navigate to="/profile" />
      ) : (
        <LoginContainer>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nomeDigitado}
            onChange={(e) => setNomeDigitado(e.target.value)}
          />
          <Button>
            <button onClick={handleLogin}>Logar</button>
          </Button>
        </LoginContainer>
      )}
    </div>
  );
};

export default Login;
