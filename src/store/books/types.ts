export interface BookType {
    title: string;
    author: string;
}

export interface BookListRequestType {
    query: string;
}

export interface BookListResponseType {
    list: Array<BookType>;
}

export interface BookListStoreType {
    list: Array<BookType>;
    status: 'idle' | 'loading' | 'success' | 'failed';
}

export const bookListStoreDefault: BookListStoreType = {
    list: [],
    status: 'idle',
};

export interface BookListActionType {
    type: string;
    payload: BookListRequestType;
}
