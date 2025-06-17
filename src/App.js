import React from "react";
import "./App.scss";
import Main from "./containers/Main";

console.log("GitHub Username:", process.env.REACT_APP_GITHUB_USERNAME);
console.log("Using GitHub Data:", process.env.REACT_APP_USE_GITHUB_DATA);

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
