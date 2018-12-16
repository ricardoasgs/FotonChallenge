import {
  FETCHING_BOOKS,
  SUCCESS_FETCHED_BOOKS,
  FAILURE_FETCHED_BOOKS,
  SELECTED_BOOK,
  CHANGED_FILTER,
  CLEANING_LIST
} from "../actions/types";

const INITIAL_STATE = {
  book: {},
  books: [],
  maxBooks: 0,
  loading: false,
  error: false,
  filter: "Programação"
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_BOOKS:
      return { ...state, loading: true };
    case SUCCESS_FETCHED_BOOKS:
      return {
        ...state,
        books: state.books.concat(action.payload.items),
        loading: false,
        maxBooks: action.payload.totalItems
      };
    case FAILURE_FETCHED_BOOKS:
      return {
        ...state,
        loading: false,
        error: true
      };
    case SELECTED_BOOK:
      return { ...state, book: action.payload };
    case CHANGED_FILTER:
      return { ...state, filter: action.payload };
    case CLEANING_LIST:
      return { ...state, books: [] };
    default:
      return state;
  }
}
