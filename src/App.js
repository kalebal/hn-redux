import React from 'react';
import { Search } from './features/search/Search';
import ResultsList from './features/search/ResultsList';
import './App.css';


function App() {
  return (
    <div className="App">
      <Search />
      <ResultsList />
    </div>
  );
}

export default App;
