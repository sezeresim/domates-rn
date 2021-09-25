export enum NotesActionTypes {
  ADD_TASK = '@@notes/ADD_TASK',
  UPDATE_TASK = '@@notes/UPDATE_TASK',
  DELETE_TASK = '@@notes/DELETE_TASK',
  CLEAR_ALL = '@@notes/CLEAR_ALL',
}

type NoteType = {
  id: number;
  description: string;
  completed: boolean;
};
export interface NotesState {
  data: NoteType[];
  currentID: number;
}
