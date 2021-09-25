import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import {HomeScreen, SettingsScreen, NotesScreen} from '../pages';
import {StyleSheet} from 'react-native';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab
        title={'Timer'}
        icon={<Icon name="clock-outline" />}
        style={styles.buttons}
      />
      <BottomNavigationTab
        title={'Notes'}
        icon={<Icon name="checkmark-square-outline" />}
        style={styles.buttons}
      />
      <BottomNavigationTab
        title={'Settings'}
        icon={<Icon name="settings-outline" />}
        style={styles.buttons}
      />
    </BottomNavigation>
  );
};

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Timer" component={HomeScreen} />
    <Screen name="Notes" component={NotesScreen} />
    <Screen name="Settings" component={SettingsScreen} />
  </Navigator>
);

const styles = StyleSheet.create({
  buttons: {
    paddingTop: 6,
  },
});

export default TabNavigator;
