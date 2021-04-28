import searchReducer from '../features/search/searchSlice';
import resultsReducer from '../features/results/resultSlice';

export default function appReducer(state = {}, action) {
  return {
    searches: searchReducer(state.searches, action),
    results: resultsReducer(state.results, action)
  }
}