import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import UserContext from "../../context/userContext";
import pen from "../../../images/pen.svg";

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
      <div className={styles.headerCard}>
        <div onClick={handleEditTask} className={styles.editButton}>
          <img src={pen}/>
        </div>
        <h2>{task}</h2>
      </div>
      <div className={styles.dateDiv}>
        <p className={styles[statusName()]}>{statusName()}</p>
        <p>{dateFormat}</p>
      </div>
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