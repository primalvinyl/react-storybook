import { combineReducers } from 'redux';
import { bookListReducer } from './books/reducers';

export default combineReducers({
    bookList: bookListReducer,
});
