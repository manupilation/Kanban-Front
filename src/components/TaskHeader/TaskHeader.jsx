import React from "react";
import DefaultButton from "../DefaultButton";

function TaskHeader() {
  return(
    <header>
      <h1>Boas vindas, Username</h1>

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
