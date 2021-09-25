export enum SettingsActionTypes {
  CHANGE_THEME = '@@settings/CHANGE_THEME',
  CHANGE_VIBRATION = '@@settings/CHANGE_VIBRATION',
  START_TIMER = '@@settings/START_TIMER',
  STOP_TIMER = '@@settings/STOP_TIMER',
  RESET_TIMER = '@@settings/RESET_TIMER',
  TIMER_TICK = '@@settings/TIMER_TICK',
  COMPLETE_CYCLE = '@@settings/COMPLETE_CYCLE',
}

export interface SettingsState {
  isDark: boolean;
  isVibration: boolean;
  isPaused: boolean;
  timer: any;
  noOfCycle: number;
  isPomodoro: boolean;
}
