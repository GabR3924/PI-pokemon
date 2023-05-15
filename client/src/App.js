import axios from 'axios'
import "./App.css";
import Hero from "./componentes/Hero/Hero";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Explorador from "./componentes/Explorador/explorador"
import { useState } from "react";

function App() {
  const [results, setResults] = useState(null);

  const handleSearch = (query) => {
    axios.get('http://localhost:3001/pokemon',{
      params: {
        query: query
      }
    }).then(response => setResults(response.data))
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/explorar" element={<Explorador onSearch = {handleSearch} results={results}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
