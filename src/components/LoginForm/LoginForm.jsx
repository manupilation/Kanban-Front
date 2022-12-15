import React, { useState, useContext } from "react";
import TextInput from "../Input";
import DefaultButton from "../DefaultButton";
import styles from "./styles.module.scss";
import UserContext from "../../context/userContext";
import { Navigate } from "react-router-dom";

function LoginForm() {
  const { token, setToken } = useContext(UserContext);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const LOGIN_URL = "http://localhost:3001/login";

  function handleChangeLogin(event) {
    const { name, value } = event.target;
    setFormValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email: formValue.email, password: formValue.password})
    };

    fetch(LOGIN_URL, options)
      .then((response) => response.json())
      .then(body => {
        setToken(body.token);
      });
  }


  const { email, password } = formValue;


  if(token) {
    return <Navigate to="/tasks"/>;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <TextInput
          type="text"
          value={email}
          name="email"
          labelText="Email:"
          className={styles.emailInput}
          changeInput={handleChangeLogin}
        />
  
        <TextInput
          type="password"
          value={password}
          name="password"
          labelText="Senha:"
          className={styles.passwordInput}
          changeInput={handleChangeLogin}
        />
  
        <DefaultButton
          type="submit"
          text="ENTRAR"
          className={styles.loginButton}
        />
      </form>
    );
  }

}

export default LoginForm;
