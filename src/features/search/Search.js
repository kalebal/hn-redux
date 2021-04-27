import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  searchAsync,
  selectSearch,
} from './searchSlice';

export function Search() {
  const pastSearches = useSelector(selectSearch);
  const dispatch = useDispatch();
  const [text, setText] = useState('')
  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    if (e.key === 'Enter' && trimmedText) {
      // Dispatch the search add action with this text
      dispatch(searchAsync(text))
      // And clear out the text input
      setText('')
    }
  }

  return (
    <div>
      <h1>
        Search
      </h1>
      <h3> {pastSearches} </h3>
        <input
        type="text"
        placeholder="What are you looking for?"
        autoFocus={true}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
    />
    </div>
  );
}
