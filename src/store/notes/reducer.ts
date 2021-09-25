import {Reducer} from 'redux';
import {NotesState, NotesActionTypes} from './types';

const initialState: NotesState = {
  data: [],
  currentID: 0,
};

const reducer: Reducer<NotesState> = (state = initialState, action) => {
  switch (action.type) {
    case NotesActionTypes.ADD_TASK:
      return {
        data: [
          ...state.data,
          {
            id: state.currentID + 1,
            description: action.payload.data,
            completed: false,
          },
        ],
        currentID: state.currentID + 1,
      };
    case NotesActionTypes.UPDATE_TASK:
      return {
        ...state,
        data: state.data.map(item =>
          item.id === action.payload.id
            ? {...item, completed: !item.completed}
            : item,
        ),
      };
    case NotesActionTypes.DELETE_TASK:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload.id),
      };
    case NotesActionTypes.CLEAR_ALL:
      return {
        ...state,
        data: [],
        currentID: 0,
      };
    default: {
      return state;
    }
  }
};

export {reducer as NotesReducer};
