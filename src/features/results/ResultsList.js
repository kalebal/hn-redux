import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllResults } from '../search/searchSlice';
import ResultItem from './ResultItem';


export default function ResultsList () {
  const results = useSelector(selectAllResults);

  return (
    <section>
      <h3>Results</h3>
      <ul>
      {results.map((search) => {
        return <ResultItem key={search.objectID} data={search} />
      })}
      </ul>
    </section>
  );
}