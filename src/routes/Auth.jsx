// ./src/routes/Auth.js

import { useContext, useEffect } from "react";

import { Navigate } from "react-router-dom";
import UserContext from "../contexts/user/UserContext";

export default function AuthRoute({ component: Component }) {
  const userCtx = useContext(UserContext);
  const { authStatus, verifyingUser } = userCtx;

  useEffect(() => { // cada vez que hay un cambio de estado, sirve para que se verifique el usuario
    verifyingUser();
  }, [authStatus]);

  return <>{authStatus ? <Navigate replace to="/" /> : <Component />}</>;
}//si me autentico, me redirige a la pagina principal, si no, me deja dejara en el componente en el que estoy
