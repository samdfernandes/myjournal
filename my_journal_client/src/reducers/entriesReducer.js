import { GET_ENTRIES, NEW_ENTRY } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ENTRIES:
      return {
        ...state,
        items: action.payload
      };
    case NEW_ENTRY:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
