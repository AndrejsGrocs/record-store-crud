import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Records from "./pages/Records";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Records/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
