import React from "react";
import styles from "./styles.module.scss";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <section className={styles.registerSection}>
      <RegisterForm />
      <p>Já tem uma conta ?</p>
      <Link to="/login">ENTRAR</Link>
    </section>
  );
}

export default RegisterPage;
