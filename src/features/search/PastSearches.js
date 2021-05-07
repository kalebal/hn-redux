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
  console.log('pastSearches: ', pastSearches);
  return (
    <section className="pastSearches">
      <h3>Past Searches</h3>
      <hr />
      <ul>
      {pastSearches.map((search) => {
        return (<li
        key={search.id}
        onClick={() => dispatch(fetchResults(search.text, 'Clicked'))}
        >
        {search.text}
        <i className="fa fa-trash"
        aria-hidden="true"
        onClick={(e) => {
          e.preventDefault()
          dispatch({ type: 'searches/deleteSearch', payload: search.id })}}
        ></i>
        </li>);
      })}
      </ul>
    </section>
  );
}
