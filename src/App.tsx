import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor, RootState} from './store/store';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import Router from './router/index';
import {useSelector} from 'react-redux';

const UIKıttenProvider = () => {
  const {isDark} = useSelector((state: RootState) => state.settings);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva[isDark ? 'dark' : 'light']}>
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
          <Router />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UIKıttenProvider />
      </PersistGate>
    </Provider>
  );
};

export default App;
