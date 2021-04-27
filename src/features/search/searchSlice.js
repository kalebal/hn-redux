import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  pastSearches: [],
  searchResults: [],
  status: 'idle',
  error: null,
};

export const fetchResults = createAsyncThunk(
  'search/fetchData',
  async (str) => {
    console.log('in fetch results');
    const response = await axios.get('https://3d952453-feb4-47b9-89aa-5256ea444432.mock.pstmn.io/api/v1/search', {params: { query: 'cats' }})
    .then((res) => {
      console.log(res.data)
      return res;
    });
    return response.data.hits;
    // The value we return becomes the `fulfilled` action payload
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    searchSubmitted(state, action) {
        state.pastSearches.push(action.payload);
      }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.status = 'idle';
        state.searchResults = state.searchResults.concat(action.payload);
        console.log(state.searchResults);
      })
      .addCase(fetchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});


export const { searchSubmitted } = searchSlice.actions;

export const selectSearch = (state) => state.search.pastSearches;
export const selectAllResults = (state) => state.search.searchResults;

export default searchSlice.reducer;
