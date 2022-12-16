import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import TaskPage from "../pages/TasksPage/TaskPage";

function AppRouter() {

  return(
    <HashRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/tasks" element={ <TaskPage /> } />
        <Route path="/" element={<Navigate to="/login" />}/>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
