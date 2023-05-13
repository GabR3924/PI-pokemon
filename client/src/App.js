import "./App.css";
import Hero from "./componentes/Hero/Hero";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Explorador from "./componentes/Explorador/explorador"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/explorar" element={<Explorador/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
