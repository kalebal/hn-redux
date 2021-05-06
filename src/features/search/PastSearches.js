import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchResults } from '../results/resultSlice';

const selectSearch = state => state.searches.pastSearches;
export default function PastSearches () {
  const pastSearches = useSelector(selectSearch);
  const dispatch = useDispatch();
  // TODO: clicking on a past search changes search input value
  // and displays results
  // To consider: cache past results by search query for faster load time on click
  console.log(pastSearches);
  return (
    <section className="pastSearches">
      <h3>Past Searches</h3>
      <ul>
      {pastSearches.map((search) => {
        return (<li
        key={search.id}
        onClick={() => dispatch(fetchResults(search.text, 'Clicked'))}
        > {search.text} </li>);
      })}
      </ul>
    </section>
  );
}
