import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Records from "./pages/Records";
import Update from "./pages/Update";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Records />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/!" element={<Records />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
