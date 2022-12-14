import React, { useState } from "react";
import UserContext from "./userContext";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState([]);

  const contextData = {
    token,
    userData,
    setToken,
    setUserData,
  };

  return(
    <UserContext.Provider value={ contextData }>
      { children }
    </UserContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Provider;
