import React, { useState } from "react";
import UserContext from "./userContext";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [updateData, setUpdateData] = useState({
    task: "",
    status: "",
    _id: ""
  });
  const [updating, setUpdating] = useState(false);

  const contextData = {
    token,
    userData,
    updateData,
    updating,
    setToken,
    setUserData,
    setUpdateData,
    setUpdating,
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
