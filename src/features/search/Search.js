import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchResults } from '../results/resultSlice';
import styles from './Search.modules.css';

export function Search() {
  const dispatch = useDispatch();
  const [text, setText] = useState('')
  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    if (e.key === 'Enter' && trimmedText) {
      // create new thunk function with submitted query
      dispatch(fetchResults(text));
      // And clear out the text input
      setText('')
    }
  }

  // To consider: combine handleKeyDown and handleSubmit
  const handleSubmit = e => {
    // create new thunk function with submitted query
    dispatch(fetchResults(text));
    // And clear out the text input
    setText('');
  }

  return (
    <div className="searchContainer">
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
    </div>
  );
}
