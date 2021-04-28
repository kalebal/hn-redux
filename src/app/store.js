import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(appReducer, composedEnhancer);

export default store;

