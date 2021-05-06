import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchResults } from '../results/resultSlice';

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
    console.log(text);
    // create new thunk function with submitted query
    dispatch(fetchResults(text));
    // And clear out the text input
    setText('');
  }

  return (
    <div className="searchContainer">
      <div className="searchBar" action="">
        <input
        type="text"
        placeholder="What're you looking for? 🧐"
        autoFocus={true}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        />
        <button className="fa fa-search"
        onClick={handleSubmit} />
      </div>
    </div>
  );
}
