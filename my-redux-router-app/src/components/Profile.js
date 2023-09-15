import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deslogar } from "../features/login/loginSlice";
import { Navigate } from "react-router-dom";
import PageWrapper from "../style/home";

const Profile = () => {
  const nomeLogado = useSelector((state) => state.login.nome);
  const dispatch = useDispatch();
  const logado = useSelector((state) => state.login.logado);

  const handleLogout = () => {
    dispatch(deslogar());
  };

  // Gere um código aleatório (exemplo simples)
  const codigoAleatorio = Math.floor(Math.random() * 10000);

  return (
    <PageWrapper>
      {logado ? (
        <>
          <h2>Perfil do Usuário</h2>
          <div>
            <strong>Nome: </strong>
            {nomeLogado}
          </div>
          <div>
            <strong>ID da Sessão: </strong>
            {codigoAleatorio}
          </div>
          <button onClick={handleLogout}>Deslogar</button>
        </>
      ) : (
        <>
          <Navigate to="/login" />
        </>
      )}
    </PageWrapper>
  );
};

export default Profile;
