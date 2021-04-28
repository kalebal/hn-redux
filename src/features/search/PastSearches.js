import React from 'react';
import { useSelector } from 'react-redux';

const selectSearch = state => state.searches.pastSearches;
export default function PastSearches () {
  const pastSearches = useSelector(selectSearch);
  // TODO: clicking on a past search changes search input value
  // and displays results
  // To consider: cache past results by search query for faster load time on click
  console.log(pastSearches);
  return (
    <section>
      <h3>Past Searches</h3>
      <ul>
      {pastSearches.map((search) => {
        return <li key={search.id}> {search.text} </li>
      })}
      </ul>
    </section>
  );
}
