import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/userContext";
import TextInput from "../Input";

function UpdateForm() {
  const [toggle, setToggle] = useState(true);
  const { setUserData, token, updateData, setUpdating, updating, setUpdateData } = useContext(UserContext);
  const [newTask, setNewTask] = useState({
    status: "pending",
    task: "",
  });

  useEffect(() => {
    if(newTask.task.length > 6) {
      setToggle(false);
    }
  }, [newTask.task]);

  function setNewDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2,"0");
    const day = date.getDate().toString().padStart(2,"0");
    const time = date.toLocaleTimeString("pt-Br", { timeZone: "America/Sao_Paulo", });

    return `${year}-${month}-${day}T${time}`;
  }

  function HandleNewTask(event) {
    event.preventDefault();
    const { value, name } = event.target;

    setNewTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function HandleUpdateTask(event) {
    event.preventDefault();
    const { value, name } = event.target;

    setUpdateData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function HandleRequestTask(event) {
    event.preventDefault();
    const SET_URL = "http://localhost:3001/setTask";
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        status: newTask.status,
        task: newTask.task,
        date: setNewDate()
      })
    };

    fetch(SET_URL, options)
      .then(response => response.json())
      .then(body => setUserData(body));

    setNewTask((prev) => {
      return {
        ...prev,
        task: "",
      };
    });
  }

  function HandleUpdateRequest(event) {
    event.preventDefault();
    const SET_URL = "http://localhost:3001/updateTask";
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        status: updateData.status,
        task: updateData.task,
        date: setNewDate(),
        _id: updateData._id
      })
    };

    fetch(SET_URL, options)
      .then(response => response.json())
      .then(body => setUserData(body));

    setUpdating(false);
  }

  function HandleDeleteRequest(event) {
    event.preventDefault();
    const SET_URL = "http://localhost:3001/delTask";
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        taskId: updateData._id
      })
    };

    fetch(SET_URL, options)
      .then(response => response.json())
      .then(body => setUserData(body));

    setUpdating(false);
  }

  function handleSetUpdate() {
    setUpdating(false);
  }

  if(!updating) {
    return (
      <form onSubmit={HandleRequestTask}>
        <TextInput 
          type="text"
          value={newTask.task}
          name="task"
          labelText="Nova tarefa:"
          changeInput={HandleNewTask}
        />
  
        <select name="status" defaultValue={"DEFAULT"} onChange={HandleNewTask}>
          <option value="DEFAULT" disabled>Progresso:</option>
          <option value="pending">Pendente</option>
          <option value="in progress">Fazendo</option>
          <option value="testing">Testando</option>
          <option value="done">Concluído</option>
        </select>
  
        <button type="submit" disabled={toggle}>CONFIRMAR</button>
      </form>
    );
  } else {
    return (
      <form onSubmit={HandleUpdateRequest}>
        <TextInput 
          type="text"
          value={updateData.task}
          name="task"
          labelText="Tarefa:"
          changeInput={HandleUpdateTask}
        />

        <select name="status" defaultValue={updateData.status} onChange={HandleUpdateTask}>
          <option value="pending">Pendente</option>
          <option value="in progress">Fazendo</option>
          <option value="testing">Testando</option>
          <option value="done">Concluído</option>
        </select>

        <button type="button" onClick={handleSetUpdate}>CANCELAR</button>
        <button type="button" onClick={HandleDeleteRequest}>EXCLUIR TAREFA</button>
        <button type="submit">ENVIAR</button>
      </form>
    );
  }

}

export default UpdateForm;
