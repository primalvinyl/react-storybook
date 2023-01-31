import { fork, all } from 'redux-saga/effects';
import { getBookListWatcher } from './books/sagas';

export default function* rootSaga() {
    yield all([
        fork(getBookListWatcher),
    ]);
};
