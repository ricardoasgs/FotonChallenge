import axios from "axios";
import { takeLatest, takeEvery, put, call, select } from "redux-saga/effects";

import {
  FETCHING_BOOKS,
  SUCCESS_FETCHED_BOOKS,
  FAILURE_FETCHED_BOOKS
} from "../actions/types";

function apiGet(filter, index) {
  return axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${filter}&maxResults=15&startIndex=${index}`
  );
}

function* getBookList(action) {
  try {
    const filter = yield select(state => state.bookReducer.filter);

    const { data } = yield call(apiGet, filter, action.payload);

    yield put({ type: SUCCESS_FETCHED_BOOKS, payload: data });
  } catch (err) {
    yield put({ type: FAILURE_FETCHED_BOOKS });
  }
}

export default function* root() {
  yield [takeLatest(FETCHING_BOOKS, getBookList)];
}
