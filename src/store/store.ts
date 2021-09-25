import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {SettingReducer} from './settings/reducer';
import {NotesReducer} from './notes/reducer';
import {SettingsState} from './settings/types';
import {NotesState} from './notes/types';

export type RootState = {
  notes: NotesState;
  settings: SettingsState;
};

const rootReducer = combineReducers<RootState>({
  notes: NotesReducer,
  settings: SettingReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['notes', 'settings'],
  },
  rootReducer,
);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
