import axios from 'axios';

const initialState = {
  pastResults: [],
  currentSearchResults: [],
};

export default function resultsReducer(state = initialState, action) {
  switch (action.type) {
    case 'results/resultsAdded': {
      return {
        ...state,
        currentSearchResults: action.payload,
        pastResults: [
          ...state.pastResults,
          action.payload
        ]
      }
    }
    default:
      return state;
  }
};

export function fetchResults(str, action = 'Added') {
  return function fetchNewResults(dispatch, getState) {
    axios.get('http://hn.algolia.com/api/v1/search', {params: { query: str }}).then((response) => {
      dispatch({ type: `results/resultsAdded`, payload: response.data.hits });
      dispatch({ type: `searches/search${action}`, payload: str });
    });
  }
};
