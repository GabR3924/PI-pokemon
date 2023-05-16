import axios from 'axios';
import './App.css';
import Hero from './componentes/Hero/Hero';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Explorador from './componentes/Explorador/explorador';
import { useState, useEffect } from 'react';

function App() {
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    handleSearch(searchQuery);
  }, [page]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const offset = (page - 1) * 20;
    let url = `http://localhost:3001/pokemon?offset=${offset}`;
    if (query) {
      url += `&name=${query}`;
    }
    axios.get(url).then((response) => setResults(response.data));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/explorar"
            element={
              <Explorador
                onSearch={handleSearch}
                results={results}
                page={page}
                setPage={setPage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
