import React from 'react';
import {
  Layout,
  Text,
  Toggle,
  TopNavigation,
  Divider,
  useTheme,
} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme, changeVibration} from '../../store/settings/actions';
import {RootState} from '../../store/store';
import styles from './Settings.styles';

const Settings: React.FC = () => {
  const {isDark, isVibration} = useSelector(
    (state: RootState) => state.settings,
  );
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Layout style={styles.layout}>
      <TopNavigation
        alignment="center"
        title={'Settings'}
        subtitle={'App Settings'}
      />
      <Divider />
      <Layout
        style={[styles.card, {borderBottomColor: theme['border-basic-100']}]}>
        <Layout>
          <Text>{'Dark Theme'}</Text>
        </Layout>
        <Layout>
          <Toggle checked={isDark} onChange={() => dispatch(changeTheme())} />
        </Layout>
      </Layout>
      <Layout
        style={[styles.card, {borderBottomColor: theme['border-basic-100']}]}>
        <Layout>
          <Text>{'Vibration'}</Text>
        </Layout>
        <Layout>
          <Toggle
            checked={isVibration}
            onChange={() => dispatch(changeVibration())}
          />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Settings;
