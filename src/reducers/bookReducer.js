import { FETCHING_BOOKS, FETCHED_BOOKS, SELECTED_BOOK } from "../actions/types";

const INITIAL_STATE = {
  book: {},
  books: [],
  maxBooks: 0,
  loading: false
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
    default:
      return state;
  }
}
