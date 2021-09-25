import React, {useEffect} from 'react';
import {Layout, Button, Icon} from '@ui-kitten/components';
import {Vibration} from 'react-native';
import {Timer} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Home.styles';
import {RootState} from '../../store/store';
import {
  changeTimer,
  completeCycle,
  resetTimer,
  startTimer,
  stopTimer,
} from '../../store/settings/actions';

const Home: React.FC = () => {
  const {isVibration, isPaused, timer, noOfCycle, isPomodoro} = useSelector(
    (state: RootState) => state.settings,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const int = setInterval(() => {
      if (!isPaused) {
        if (timer !== 0) {
          dispatch(changeTimer());
        } else {
          dispatch(completeCycle());
          isVibration && Vibration.vibrate([1000, 1000, 500]);
        }
      }
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [isPaused, timer, isVibration, dispatch]);

  const startButtonHandler = () => {
    isPaused ? dispatch(startTimer()) : dispatch(stopTimer());
  };

  const resetHandler = () => {
    dispatch(resetTimer());
  };

  return (
    <Layout style={styles.layout}>
      <Timer time={timer} cycleCount={noOfCycle} isPomodoro={isPomodoro} />
      <Layout style={styles.innerLayout}>
        <Button
          status={isPaused ? 'success' : 'danger'}
          style={styles.button}
          onPress={startButtonHandler}
          accessoryLeft={
            isPaused ? (
              <Icon name="play-circle-outline" />
            ) : (
              <Icon name="pause-circle-outline" />
            )
          }>
          {isPaused ? 'Start' : 'Pause'}
        </Button>
        <Button
          accessoryLeft={<Icon name="stop-circle-outline" />}
          status="primary"
          style={styles.button}
          onPress={resetHandler}>
          Reset
        </Button>
      </Layout>
    </Layout>
  );
};

export default Home;
