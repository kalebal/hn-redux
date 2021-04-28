
const initialState = {
  value: '',
  pastSearches: [],
  searchResults: [],
  status: 'idle',
  error: null,
};

// get the next ID for element in the past search list
function nextSearchId(searches) {
  const maxId = searches.reduce((maxId, search) => Math.max(search.id, maxId), -1)
  return maxId + 1
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case 'search/searchAdded': {
      return {
        ...state,
        pastSearches: [
          ...state.pastSearches,
          {
            id: nextSearchId(state.pastSearches),
            text: action.payload
          }
        ]
      }
    }
    default:
      return state;
  }

}

// export const fetchResults = createAsyncThunk(
//   'search/fetchResults',
//   async (str) => {
//     const response = await axios.get('http://hn.algolia.com/api/v1/search', {params: { query: str }})
//     .then((res) => {
//       return res;
//     });
//     // becomes the `fulfilled` action payload
//     return response.data.hits;
//   }
// );

// export const searchSlice = createSlice({
//   name: 'search',
//   initialState,
//   reducers: {
//     searchSubmitted(state, action) {
//         state.pastSearches.push(action.payload);
//       }
//   },
//   // extraReduces handles actions created in createAsyncThunk
//   // TODO: handle promise rejection, loading state UI
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchResults.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchResults.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.searchResults = action.payload;
//       })
//       .addCase(fetchResults.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//         state.searchResults = state.searchResults.concat('ERROR');
//       })
//   },
// });


// export const { searchSubmitted } = searchSlice.actions;

// export const selectSearch = (state) => state.search.pastSearches;
// // This grabs all search results, not entirely necessary but included
// // for readability and potential future filtering/sorting functionality
// export const selectAllResults = (state) => state.search.searchResults;

// export default searchSlice.reducer;
