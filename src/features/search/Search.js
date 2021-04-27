import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchResults,
  searchSubmitted,
} from './searchSlice';
import PastSearches from './PastSearches';
import styles from './Search.modules.css'

export function Search() {
  const dispatch = useDispatch();
  const [text, setText] = useState('')
  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    if (e.key === 'Enter' && trimmedText) {
      // Dispatch the search add and fetch results action with this text
      dispatch(searchSubmitted(text));
      dispatch(fetchResults(text));
      // And clear out the text input
      setText('')
    }
  }

  // To consider: combine handleKeyDown and handleSubmit
  const handleSubmit = e => {
    dispatch(searchSubmitted(text));
    dispatch(fetchResults(text));
    setText('');
  }

  return (
    <section>
      <input
      className={styles.searchBar}
      type="text"
      placeholder="Search Hacker News"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      />
      <button
      className={styles.button}
      onClick={handleSubmit}>
        Submit
      </button>

      <PastSearches />
    </section>
  );
}
