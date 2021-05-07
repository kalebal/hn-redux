
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
    case 'searches/searchAdded': {
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
    case 'searches/searchClicked': {
      return state;
    }
    case 'searches/deleteSearch': {
      let next = state.pastSearches;
      next = next.filter((elt) => {
        return elt.id !== action.payload;
      });
      console.log('next after filter', next);
      return {
        ...state,
        pastSearches: next
      };
    }
    default:
      return state;
    }
  }
