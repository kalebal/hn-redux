import React from 'react';
import { useSelector } from 'react-redux';
import ResultItem from './ResultItem';


const selectAllResults = state => state.results.currentSearchResults;
export default function ResultsList () {
  const results = useSelector(selectAllResults);

  if (typeof results !== undefined) {
    return (
      <section className="results">
        <h3>Results</h3>
        <hr />
        <ul>
        {results.map((result) => {
          return <ResultItem key={result.objectID} data={result} />
        })}
        </ul>
      </section>
    );
  } else {
    return (
      <section>
        <h3>Results</h3>
      </section>
    );
  }
}
