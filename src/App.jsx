import React from "react";
import AppRouter from "./router/BrowseRouter";
import Provider from "./context/Provider";
import "./styles/global.scss";
import "./styles/colors.scss";


function App() {
  return (
    <Provider>
      <AppRouter />
    </Provider>
  );
}

export default App;
