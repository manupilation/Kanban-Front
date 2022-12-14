import React from "react";
import styles from "./styles.module.scss";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

function RegisterPage() {
  return (
    <section className={styles.registerSection}>
      <RegisterForm />
      <p>Já tem uma conta ?</p>
      <a>ENTRAR</a>
    </section>
  );
}

export default RegisterPage;
