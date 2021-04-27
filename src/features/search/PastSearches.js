import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearch } from './searchSlice';

export default function PastSearches () {
  const pastSearches = useSelector(selectSearch);
  // TODO: clicking on a past search changes search input value
  // and displays results
  // To consider: cache past results by search query for faster load time on click
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
