import React from 'react';
import { Search } from './features/search/Search';
import PastSearches from './features/search/PastSearches';
import ResultsList from './features/results/ResultsList';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header>
        <h1> Search Hacker News </h1>

      </header>
      <main>
        <Search />
        <section className="listContainer">
          <PastSearches />
          <ResultsList />
        </section>
      </main>
    </div>
  );
}

export default App;
