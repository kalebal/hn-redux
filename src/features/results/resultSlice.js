const initialState = {
  pastResults: [],
  currentSearchResults: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case 'results/resultsAdded': {
      return {
        ...state,
        pastResults: [
          ...state.pastResults
        ]
      }
    }
    default:
      return state;
  }

}