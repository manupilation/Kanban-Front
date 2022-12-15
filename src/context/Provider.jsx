import React, { useState } from "react";
import UserContext from "./userContext";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const contextData = {
    token,
    userData,
    loginEmail,
    loginPassword,
    registerEmail,
    registerPassword,
    setToken,
    setUserData,
    setLoginEmail,
    setLoginPassword,
    setRegisterEmail,
    setRegisterPassword
  };

  return(
    <UserContext.Provider value={ contextData }>
      { children }
    </UserContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}.isRequired;

export default Provider;
