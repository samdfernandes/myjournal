import { GET_ENTRIES, NEW_ENTRY } from './types';
import axios from 'axios';

export const getEntries = () => async dispatch => {
  try {
    console.log('fetchingnnn');
    const response = await axios.get('http://localhost:3000/users/1/entries');
    const entries = response.data;
    dispatch({
      type: GET_ENTRIES,
      payload: entries
    });
  } catch {}
};

export const newEntry = formInputs => async dispatch => {
  console.log('action called');

  try {
    console.log('fetchingnnn');
    const response = await axios.post(
      `http://localhost:3000/users/1/entry/${formInputs}`
    );
    const post = response.data;
    dispatch({
      type: NEW_ENTRY,
      payload: post
    });
  } catch {}
};
