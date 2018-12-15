import {
  FETCHING_BOOKS,
  FETCHED_BOOKS,
  SELECTED_BOOK,
  CHANGED_FILTER
} from "../actions/types";

const INITIAL_STATE = {
  book: {},
  books: [],
  maxBooks: 0,
  loading: false,
  filter: "Programação"
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_BOOKS:
      return { ...state, loading: true };
    case FETCHED_BOOKS:
      return {
        ...state,
        books: state.books.concat(action.payload.items),
        loading: false,
        maxBooks: action.payload.totalItems
      };
    case SELECTED_BOOK:
      return { ...state, book: action.payload };
    case CHANGED_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
