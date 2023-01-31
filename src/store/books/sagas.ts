import { takeEvery, put, call } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { putBookList } from './reducers';
import serviceApi from '../serviceApi';
import {
    bookListStoreDefault,
    BookListActionType,
    BookListRequestType,
} from './types';

// get book list
export const getBookList = createAction<BookListRequestType>('books/getBookList');

export function* getBookListWorker({ payload }: BookListActionType): Generator {
    // start request
    yield put(putBookList({ ...bookListStoreDefault, status: 'loading' }));

    try {
        // make request
        const response = yield call(serviceApi, `/api/books/${payload.query}`);

        // request success
        yield put(putBookList({ ...response as Object, status: 'success' }));
        
    } catch (error) {
        // request failure
        yield put(putBookList({ ...bookListStoreDefault, status: 'failed' }));
    }
}

export function* getBookListWatcher() {
    yield takeEvery(getBookList.toString(), getBookListWorker);
}
