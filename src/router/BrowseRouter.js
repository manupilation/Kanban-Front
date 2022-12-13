import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/login" element={<div>Login</div>}/>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;