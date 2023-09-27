import Main from "./Components/Main/Main";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./Components/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
