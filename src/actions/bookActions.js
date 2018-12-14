import axios from "axios";

import { FETCHING_BOOKS, FETCHED_BOOKS, SELECTED_BOOK } from "./types";

export async function fetchBooks(filter = "Programação", index = 0) {
  return dispatch => {
    dispatch({
      type: FETCHING_BOOKS
    });
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${filter}&maxResults=15&startIndex=${index}`
      )
      .then(res => {
        // console.log(res.data.items);
        // console.log(res.data.totalItems);
        dispatch({ type: FETCHED_BOOKS, payload: res.data });
      });
  };
}

export function selectBook(book, callback) {
  return dispatch => {
    dispatch({
      type: SELECTED_BOOK,
      payload: book
    });
    callback();
  };
}
