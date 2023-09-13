import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deslogar } from "../features/login/loginSlice";
import { Route, Navigate } from "react-router-dom";

const Profile = () => {
  const nomeLogado = useSelector((state) => state.login.nome);
  const dispatch = useDispatch();
  const logado = useSelector((state) => state.login.logado);
  const [nomeDigitado, setNomeDigitado] = useState("");

  const handleLogout = () => {
    dispatch(deslogar());
    setNomeDigitado(""); // Limpa a caixa de texto ao deslogar
  };

  // Gere um código aleatório (exemplo simples)
  const codigoAleatorio = Math.floor(Math.random() * 10000);

  return (
    <div>
      {logado ? (
        <>
          <h2>Perfil do Usuário</h2>
          <div>
            <strong>Nome: </strong>
            {nomeLogado}
          </div>
          <div>
            <strong>Código Aleatório: </strong>
            {codigoAleatorio}
          </div>
          <button onClick={handleLogout}>Deslogar</button>
        </>
      ) : (
        <>
          <Navigate to="/login" />
        </>
      )}
    </div>
  );
};

export default Profile;
