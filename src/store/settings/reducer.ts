import {Reducer} from 'redux';
import {SettingsState, SettingsActionTypes} from './types';

enum TimeSetting {
  SECONDS = 60,
  DEFAULT_MINUTES = 25,
}

export const initialState: SettingsState = {
  isDark: true,
  isVibration: true,
  isPaused: true,
  timer: TimeSetting.DEFAULT_MINUTES * TimeSetting.SECONDS,
  noOfCycle: 1,
  isPomodoro: false,
};

const reducer: Reducer<SettingsState> = (state = initialState, action) => {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_THEME:
      return {
        ...state,
        isDark: !state.isDark,
      };
    case SettingsActionTypes.CHANGE_VIBRATION:
      return {
        ...state,
        isVibration: !state.isVibration,
      };
    case SettingsActionTypes.START_TIMER:
      return {
        ...state,
        isPaused: false,
        isPomodoro: state.noOfCycle + 1 > 4 ? true : false,
      };
    case SettingsActionTypes.STOP_TIMER:
      return {
        ...state,
        isPaused: true,
      };
    case SettingsActionTypes.RESET_TIMER:
      return {
        ...state,
        timer: TimeSetting.DEFAULT_MINUTES * TimeSetting.SECONDS,
        isPaused: true,
        isPomodoro: false,
        noOfCycle: 1,
      };
    case SettingsActionTypes.TIMER_TICK:
      return {
        ...state,
        timer: state.timer - 1,
      };
    case SettingsActionTypes.COMPLETE_CYCLE:
      return {
        ...state,
        isPaused: true,
        timer: TimeSetting.DEFAULT_MINUTES * TimeSetting.SECONDS,
        noOfCycle: state.noOfCycle < 4 ? state.noOfCycle + 1 : 1,
        isPomodoro: state.noOfCycle + 1 > 4 ? true : false,
      };
    default:
      return state;
  }
};

export {reducer as SettingReducer};
