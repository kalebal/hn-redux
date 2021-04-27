import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearch } from './searchSlice';

export default function PastSearches () {
  const pastSearches = useSelector(selectSearch);
  return (
    <section>
      <h3>Past Searches</h3>
      <ul>
      {pastSearches.map((search) => {
        return <li key={search}> {search} </li>
      })}
      </ul>
    </section>
  );
}
