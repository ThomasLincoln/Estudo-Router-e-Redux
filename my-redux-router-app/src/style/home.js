import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #111; /* Aqui definimos um fundo preto com transparência */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999; /* Para garantir que fique acima de todo o conteúdo */
  color:white;
  font-family: Arial;
`;

export default PageWrapper;
