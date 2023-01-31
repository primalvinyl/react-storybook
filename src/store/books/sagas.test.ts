import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import * as reducers from './reducers';
import * as sagas from './sagas';
import * as mocks from './mocks';
import serviceApi from '../serviceApi';

describe('getBookListWorker', () => {
    it('gets and puts data', () => {
        return expectSaga(sagas.getBookListWorker, {
            type: 'test',
            payload: { query: 'test' }
        })
            .call(serviceApi, '/api/books/test')
            .provide([
                [matchers.call.fn(serviceApi), mocks.bookListResponseMock],
            ])
            .put(reducers.putBookList(mocks.bookListStoreMock))
            .withReducer(reducers.bookListReducer)
            .hasFinalState(mocks.bookListStoreMock)
            .run();
    });
});

describe('getBookListWatcher', () => {
    it('listens for action', () => {
        return expectSaga(sagas.getBookListWatcher) 
            .dispatch(sagas.getBookList({ query: 'test' }))
            .silentRun();
    });
});
