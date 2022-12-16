import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import DefaultButton from "../DefaultButton";
import styles from "./styles.module.scss";

function TaskHeader() {
  const { userData } = useContext(UserContext);

  return(
    <header className={styles.headerContainer}>
      <h1>Boas vindas, { userData.user + "!" || "Visitante!" }</h1>
      <div className={styles.menuButton}>
        <DefaultButton
          type="button"
          text="MENU"
        />
        <ul className={styles.menuList}>
          <li><a>SAIR</a></li>
        </ul>
      </div>
    </header>
  );
}


export default TaskHeader;
