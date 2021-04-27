import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllResults } from '../search/searchSlice';


export default function ResultsList () {
  const results = useSelector(selectAllResults);
  return (
    <section>
      <h3>Results</h3>
      <ul>
      {results.map((search) => {
        return <li key={search.objectID}> {search.title} </li>
      })}
      </ul>
    </section>
  );
}
