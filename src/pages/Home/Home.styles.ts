import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  innerLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Toggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  menuLabel: {
    fontSize: 20,
  },
  button: {
    marginHorizontal: 5,
    marginBottom: 20,
  },
});
