import * as reducers from './reducers';
import * as sagas from './sagas';
import * as mocks from './mocks';

describe('getBookList', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: sagas.getBookList.toString(),
            payload: { query: 'test' },
        };
        const actualResult = sagas.getBookList({ query: 'test' });
        expect(actualResult).toEqual(expectedResult);
    });
});

describe('putBookList', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: reducers.putBookList.toString(),
            payload: mocks.bookListStoreMock,
        };
        const actualResult = reducers.putBookList(mocks.bookListStoreMock);
        expect(actualResult).toEqual(expectedResult);
    });
});
