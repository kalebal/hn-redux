import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  pastSearches: [],
  searchResults: [],
  status: 'idle',
  error: null,
};

// Todo: CORS headers
export const fetchResults = createAsyncThunk(
  'search/fetchResults',
  async (str) => {
    const response = await axios.get('http://hn.algolia.com/api/v1/search', {params: { query: str }})
    .then((res) => {
      return res;
    });
    // becomes the `fulfilled` action payload
    return response.data.hits;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchSubmitted(state, action) {
        state.pastSearches.push(action.payload);
      }
  },
  // extraReduces handles actions created in createAsyncThunk
  // TODO: handle promise rejection, loading state UI
  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.status = 'idle';
        state.searchResults = action.payload;
      })
      .addCase(fetchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.searchResults = state.searchResults.concat('ERROR');
      })
  },
});


export const { searchSubmitted } = searchSlice.actions;

export const selectSearch = (state) => state.search.pastSearches;
// This grabs all search results, not entirely necessary but included
// for readability and potential future filtering/sorting functionality
export const selectAllResults = (state) => state.search.searchResults;

export default searchSlice.reducer;
