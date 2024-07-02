import {
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  CREATE_NOTE_SUCCESS,
  DELETE_NOTE_SUCCESS,
  ARCHIVE_NOTE_SUCCESS,
  UNARCHIVE_NOTE_SUCCESS
} from '../actions/actions_types';

const initialState = {
  notes: [],
  loading: false,
  error: null
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        notes: action.payload
      };
    case CREATE_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        notes: [...state.notes, action.payload]
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload)
      };
    case ARCHIVE_NOTE_SUCCESS:
    case UNARCHIVE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        )
      };
    case FETCH_NOTES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default notesReducer;
