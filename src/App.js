import React from 'react';
import { Search } from './features/search/Search';
import PastSearches from './features/search/PastSearches';
import ResultsList from './features/results/ResultsList';
import './App.css';


function App() {
  return (
    <div className="App">
      <section>
        <Search />
        <PastSearches />
      </section>
      <ResultsList />
    </div>
  );
}

export default App;
