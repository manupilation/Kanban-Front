import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import DefaultButton from "../DefaultButton";

function TaskHeader() {
  const { userData } = useContext(UserContext);

  return(
    <header>
      <h1>Boas vindas, { userData.user + "!" || "Visitante!" }</h1>
      <div>
        <DefaultButton
          type="button"
          text="MENU"
        />
        <ul>
          <li><a>SAIR</a></li>
        </ul>
      </div>
    </header>
  );
}


export default TaskHeader;
