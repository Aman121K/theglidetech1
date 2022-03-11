import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/screens/app-navigation/app-navigator';
import { ErrorAlert } from '@components/';

import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { Provider, useSelector } from 'react-redux';
import store from './src/dataservice';
enableScreens();
LogBox.ignoreAllLogs();
import '@services/i18n/i18n';
import { Platform, StatusBar } from 'react-native';
import Loader from '@components/loader';
import * as Sentry from '@sentry/react-native';
import { ENV } from './src/dataservice/services/api-services/env';

// import moment from 'moment';
// import BackgroundTimer from 'react-native-background-timer';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import { sendNotificationToken } from '@services/api/account.api';

// import {
//   iOSNotify,
//   iOSNotifyListener,
//   onNotif,
// } from '@services/push-notification/iOSNotify';
const App = () => {
  // iOSNotify();
  // const [, setNotificationToken] = useGlobal('notificationToken');
  const [state, setState] = useState({});

  useEffect(() => {
    // SplashScreen.hide();
    Sentry.init({
      dsn: 'https://a31b218b98704759af1a660b6f7797c4@o974747.ingest.sentry.io/5930563',

      environment: ENV.STAGE
    });

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#ffffff');
      StatusBar.setBarStyle('dark-content');
      StatusBar.setTranslucent(true);
    }
    // iOSNotifyListener();
  }, []);

  // const notif = new NotifService(onRegister, onNotif);

  return (
    <Sentry.ErrorBoundary>
      <SafeAreaProvider>
        <Provider store={store}>
          <Loader />
          <AppNavigator />
          <ErrorAlert />
        </Provider>
      </SafeAreaProvider>
    </Sentry.ErrorBoundary>
  );
};

export default App;
