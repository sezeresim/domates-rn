import {SettingsActionTypes} from './types';

export const changeTheme = () => ({
  type: SettingsActionTypes.CHANGE_THEME,
});

export const changeVibration = () => ({
  type: SettingsActionTypes.CHANGE_VIBRATION,
});

export const startTimer = () => ({
  type: SettingsActionTypes.START_TIMER,
});

export const stopTimer = () => ({
  type: SettingsActionTypes.STOP_TIMER,
});

export const resetTimer = () => ({
  type: SettingsActionTypes.RESET_TIMER,
});

export const changeTimer = () => ({
  type: SettingsActionTypes.TIMER_TICK,
});

export const completeCycle = () => ({
  type: SettingsActionTypes.COMPLETE_CYCLE,
});
