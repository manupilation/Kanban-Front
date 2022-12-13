import React from "react";
import TextInput from "../Input";
import DefaultButton from "../DefaultButton";
import styles from "./styles.module.scss";

function LoginForm() {
  return (
    <form>
      <h2>LOGIN</h2>
      <TextInput
        type="text"
        value=""
        name="email"
        labelText="Email:"
        className={styles.emailInput}
      />

      <TextInput
        type="password"
        value=""
        name="password"
        labelText="Senha:"
        className={styles.passwordInput}
      />

      <DefaultButton
        type="button"
        text="ENTRAR"
        className={styles.loginButton}
      />
    </form>
  );
}

export default LoginForm;
