import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

function TaskCard({ task, date, status, _id }) {
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

  return (
    <div className={styles.taskCardContainer}>
      <div>
        <div>
          <img src=""/>
        </div>
        <h2>{task}</h2>
      </div>
      <p>{statusName()}</p>
      <p>{date.replace("T", " ").replace(".000Z", "")}</p>
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