import { Dashboard } from "./pages/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:lang/:country" element={<Dashboard />} />
        <Route path="/:lang/:country" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
