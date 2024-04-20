import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route></Routes>
    </div>
  );
}

export default App;
