import React, { useContext, memo } from "react";
import UserContext from "../../context/userContext";
import { Navigate } from "react-router-dom";
import TaskCard from "../TaskCard/taskCard";
import UpdateForm from "../UpdateForm/UpdateForm";
import styles from "./styles.module.scss";

function TaskBody() {
  const { userData } = useContext(UserContext);

  if("error" in userData) {
    return <Navigate to="/login"/>;
  } else {
    return (
      <main className={styles.tasksContainer}>
        <div className={styles.titleContainer}>
          <p>Lista de tarefas:</p>
        </div>

        <section className={styles.sectionContent}>
          <UpdateForm />
          { userData.tasks?.map((t, i) => (
            <TaskCard
              task={t.task}
              key={i}
              status={t.status}
              date={t.date}
              _id={t._id}
            />
          ))}
        </section>
      </main>
    );
  }
}

export default memo(TaskBody);