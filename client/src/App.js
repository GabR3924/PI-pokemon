import axios from 'axios';
import './App.css';
import Hero from './componentes/Hero/Hero';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Explorador from './componentes/Explorador/explorador';
import CardDetail  from './componentes/Explorador/CardDetail/CardDetail'
import Creados from './componentes/Explorador/Creados/Creados';
import { useState, useEffect } from 'react';
import Crear from './componentes/Explorador/Crear/Crear'

function App() {
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});


  useEffect(() => {
    handleSearch(searchQuery);
  }, [page]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const offset = (page - 1) * 12;
    const limit = 12;
    let url = `http://localhost:3001/pokemon?offset=${offset}&limit=${limit}`;
    if (query) {
      url += `&name=${query}`;
    }
    axios.get(url).then((response) => {
      const filteredResults = filterResults(response.data, filters);
      setResults(filteredResults)
      // setResults(response.data)
    });
  };

  useEffect(() => {
    console.log("Valor actual de results:", results);
  }, [results]);

  const filterResults = (results, filters) => {
    console.log('filterResults', results, filters);

    let filteredResults = results;
   
    if (filters.orderBy === 'name') {
      console.log('filtering by name');
      filteredResults = Object.values(filteredResults);
      filteredResults.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.orderBy === 'type') {
      console.log('filtering by type');
      filteredResults = Object.values(filteredResults);
      filteredResults.sort((a, b) => a.type.name.localeCompare(b.type.name));
    }
  
    return filteredResults;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/home"
            element={
              <Explorador
                onSearch={handleSearch}
                results={results}
                page={page}
                setPage={setPage}
                filters={filters}
                setFilters={setFilters}
              />
            }
          />
          <Route path='/card/detail' element={<CardDetail/>}/>
          <Route path='/creados' element={<Creados/>}/>
          <Route path='/creados/new' element={<Crear/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
