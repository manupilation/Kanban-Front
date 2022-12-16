import React, { useContext, useEffect } from "react";
import TaskHeader from "../../components/TaskHeader/TaskHeader";
import TaskBody from "../../components/TaskBody/TaskBody";
import UserContext from "../../context/userContext";

function TaskPage() {
  const { token, setUserData } = useContext(UserContext);

  function fetchData() {
    fetch("http://localhost:3001/get", {
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      }
    }).then(response => response.json()).then(body => setUserData(body));
  }

  useEffect(() => {
    fetchData();
  }, [token]);


  return (
    <div>
      <TaskHeader />
      <TaskBody />
    </div>
  );
}

export default TaskPage;
