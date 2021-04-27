import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllResults } from './searchSlice';
import styles from './Search.modules.css'

export default function ResultsList () {
  const results = useSelector(selectAllResults);
  return (
    <section>
      <h3>Results</h3>
      <ul className={styles.resultsList}>
      {results.map((search) => {
        return <li key={search.objectID}> {search.title} </li>
      })}
      </ul>
    </section>
  );
}
