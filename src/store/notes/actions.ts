import {NotesActionTypes} from './types';

export const addTask = (data: any) => ({
  type: NotesActionTypes.ADD_TASK,
  payload: {
    data: data,
  },
});

export const updateTask = (id: any, data?: any) => ({
  type: NotesActionTypes.UPDATE_TASK,
  payload: {
    data: data,
    id: id,
  },
});

export const deleteTask = (id: any) => ({
  type: NotesActionTypes.DELETE_TASK,
  payload: {
    id: id,
  },
});
