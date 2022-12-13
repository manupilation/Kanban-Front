import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function AppRouter() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/login" element={<div>Login</div>}/>
        <Route path="/" element={<Navigate to="/login"/>}/>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
