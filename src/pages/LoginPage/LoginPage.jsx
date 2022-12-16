import React from "react";
import styles from "./styles.module.scss";
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
  return(
    <div className={ styles.loginContainer }>
      <section className={styles.titleSection}>
        <h1>Kanban Scheduler</h1>
        <p>
          <span className={styles.spanDetail}>Aqui</span>, você gerencia melhor <span className={styles.spanDetail}>suas</span> atividades!
        </p>
      </section>

      <section className={styles.loginSection}>
        <LoginForm />
        <div className={styles.registerNow}>
          <p>Não tem uma conta ?</p>
          <a>REGISTRE-SE AQUI</a>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
