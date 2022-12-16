import React, { useState } from "react";
import DefaultButton from "../DefaultButton";
import TextInput from "../Input";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    user: "",
    password: "",
    email: "",
  });

  function HandleRegisterData(event) {
    event.preventDefault();
    const { value, name } = event.target;

    setRegisterData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }


  function HandleRegisterUser(event) {
    event.preventDefault();
    const SET_URL = "http://localhost:3001/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: registerData.user,
        password: registerData.password,
        email: registerData.email,
      })
    };

    fetch(SET_URL, options)
      .then(response => response.json());

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }

  return(
    <form onSubmit={HandleRegisterUser} className={styles.registerForm}>
      <h1>REGISTRE-SE</h1>

      <TextInput
        type="text"
        value={registerData.user}
        name="user"
        labelText="Usuário:"
        className={styles.registerInput}
        changeInput={HandleRegisterData}
      />

      <TextInput
        type="text"
        value={registerData.email}
        name="email"
        labelText="Email:"
        className={styles.registerInput}
        changeInput={HandleRegisterData}
      />

      <TextInput
        type="password"
        value={registerData.password}
        name="password"
        labelText="Senha:"
        className={styles.registerInput}
        changeInput={HandleRegisterData}
      />

      <DefaultButton 
        type="submit"
        text="CONFIRMAR"
        className={styles.loginButton}
      />
    </form>
  );
}

export default RegisterForm;
