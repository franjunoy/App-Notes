import axios from 'axios';
import {
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  CREATE_NOTE_SUCCESS,
  DELETE_NOTE_SUCCESS,
  ARCHIVE_NOTE_SUCCESS,
  UNARCHIVE_NOTE_SUCCESS
} from './actions_types';

export const fetchNotes = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_NOTES_REQUEST });
    try {
      const response = await axios.get('http://localhost:3001/notes');
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_NOTES_FAILURE, error: error.message });
    }
  };
};

export const createNote = (note) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/notes', note);
      dispatch({ type: CREATE_NOTE_SUCCESS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteNote = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/notes/${id}`);
      dispatch({ type: DELETE_NOTE_SUCCESS, payload: id });
    } catch (error) {
      console.error(error);
    }
  };
};

export const archiveNote = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/notes/${id}/archive`
      );
      dispatch({ type: ARCHIVE_NOTE_SUCCESS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const unarchiveNote = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/notes/${id}/unarchive`
      );
      dispatch({ type: UNARCHIVE_NOTE_SUCCESS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};
