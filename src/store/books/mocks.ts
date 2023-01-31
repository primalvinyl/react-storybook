import * as types from './types';

export const bookListResponseMock: types.BookListResponseType = {
    list: [{
        title: 'Moby Dick',
        author: 'Herman Melville',
    }],
};

export const bookListStoreMock: types.BookListStoreType = {
    list: [{
        title: 'Moby Dick',
        author: 'Herman Melville',
    }],
    status: 'success',
};
