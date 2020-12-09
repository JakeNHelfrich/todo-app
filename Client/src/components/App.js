import React from "react";
import Todo from "./Todo";
import Login from "./Login";

function App() {
  return (
    <React.Fragment>
      <Todo />
      {/* Made the todo app a seperate component as I plan to add a login compontent soon */}
    </React.Fragment>
  );
}

export default App;
