import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import notesReducer from '../reducer/reducer';

const rootReducer = combineReducers({
  notes: notesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
