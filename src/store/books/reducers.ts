import { createSlice } from '@reduxjs/toolkit';
import { bookListStoreDefault } from './types';

const bookList = createSlice({
    name: 'bookList',
    initialState: bookListStoreDefault,
    reducers: {
        putBookList: (state, { payload }) => ({
            ...state,
            ...payload,
        }),
    }
});

export const { putBookList } = bookList.actions;
export const bookListReducer = bookList.reducer;
