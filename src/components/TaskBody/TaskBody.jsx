import React, { useContext, memo } from "react";
import UserContext from "../../context/userContext";
import { Navigate } from "react-router-dom";
import TaskCard from "../TaskCard/taskCard";
import UpdateForm from "../UpdateForm/UpdateForm";

function TaskBody() {
  const { userData } = useContext(UserContext);

  if("error" in userData) {
    return <Navigate to="/login"/>;
  } else {
    return (
      <main>
        <div>
          <p>Lista de tarefas:</p>
        </div>

        <section>
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