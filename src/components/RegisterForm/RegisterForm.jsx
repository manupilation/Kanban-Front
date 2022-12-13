import React from "react";
import DefaultButton from "../DefaultButton";
import TextInput from "../Input";
import styles from "./styles.module.scss";

function RegisterForm() {
  return(
    <form>
      <h1>REGISTRE-SE</h1>

      <TextInput
        type="text"
        value=""
        name="user"
        labelText="Usuário:"
        className={styles.registerInput}
      />

      <TextInput
        type="text"
        value=""
        name="email"
        labelText="Email:"
        className={styles.registerInput}
      />

      <TextInput
        type="password"
        value=""
        name="password"
        labelText="Senha:"
        className={styles.registerInput}
      />

      <DefaultButton 
        type="button"
        text="CONFIRMAR"
        className={styles.loginButton}
      />
    </form>
  );
}

export default RegisterForm;
