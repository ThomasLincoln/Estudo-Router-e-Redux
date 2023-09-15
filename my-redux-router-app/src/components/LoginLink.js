import React from "react";
import { Link } from "react-router-dom";
import Button from "../style/Button";

const LoginLink = () => {
  return (
    <Button>
      <Link to="/login" className="button">Ir para a página de login</Link>
    </Button>
  );
};

export default LoginLink;
