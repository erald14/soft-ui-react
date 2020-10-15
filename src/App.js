import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Alert from "./kirin-ui/components/Alerts/Alerts";
function App() {
  return (
    <>
      <Alert />
      <Alert />
      <Alert type="success" text="wtf" />
    </>
  );
}

export default App;
