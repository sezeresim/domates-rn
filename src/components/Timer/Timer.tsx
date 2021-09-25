import React from 'react';
import {Animated} from 'react-native';
import {Icon, Layout, Text} from '@ui-kitten/components';
import styles from './Timer.styles';

type Props = {
  time: any;
  cycleCount: number;
  isPomodoro: boolean;
};

const Timer: React.FC<Props> = ({time, cycleCount, isPomodoro}) => {
  console.log(cycleCount);
  const timer = `${Math.floor(time / 60)}:${('00' + (time % 60)).slice(-2)}`;
  return (
    <Layout style={styles.timerContainer}>
      <Animated.Text>
        <Text style={styles.remainingTime}>{timer}</Text>
      </Animated.Text>
      {!isPomodoro && (
        <Animated.Text>
          <Text style={styles.cycleCount}>
            {[...Array(cycleCount)].map((_, i) => (
              <Icon key={i} name="flash" fill="gold" style={styles.icon} />
            ))}
          </Text>
        </Animated.Text>
      )}
      {isPomodoro && (
        <Animated.Text>
          <Text style={styles.pomodoro} status="success">
            <Icon name="star" fill="gold" style={styles.icon} />
            Congratulations
            <Icon name="star" fill="gold" style={styles.icon} />
          </Text>
        </Animated.Text>
      )}
    </Layout>
  );
};

export default Timer;
