import { FETCHING_BOOKS, SELECTED_BOOK, CHANGED_FILTER } from "./types";

export function fetchBooks(index = 0) {
  return {
    type: FETCHING_BOOKS,
    payload: index
  };
}

export function selectBook(book, callback) {
  callback();
  return {
    type: SELECTED_BOOK,
    payload: book
  };
}

export function changeFilter(filter) {
  return {
    type: CHANGED_FILTER,
    payload: filter
  };
}
