import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import UserContext from "../../context/userContext";

function TaskCard({ task, date, status, _id }) {
  const { setUpdateData, setUpdating } = useContext(UserContext);
  const dateFormat = date.replace("T", " ").replace(".000Z", "");

  function statusName() {
    switch(status) {
    case "in progress":
      return "Fazendo";
    case "done":
      return "Concluído";
    case "testing":
      return "Testando";
    case "pending":
      return "Pendente";

    default:
      return "";
    }
  }

  function handleEditTask(event) {
    event.preventDefault();

    setUpdating(true);

    setUpdateData((prev) => {
      return {
        ...prev,
        date: dateFormat,
        task: task,
        status: status,
        _id: _id
      };
    });
  }


  return (
    <div className={styles.taskCardContainer}>
      <div>
        <div onClick={handleEditTask}>
          <img src=""/>
          <a>Editar</a>
        </div>
        <h2>{task}</h2>
      </div>
      <p>{statusName()}</p>
      <p>{dateFormat}</p>
      <p hidden={true}>{_id}</p>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default TaskCard;