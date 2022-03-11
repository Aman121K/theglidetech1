import { NativeModules as RNNativeModules } from 'react-native';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter()
});

RNNativeModules.UIManager = RNNativeModules.UIManager || {};
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {};
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
  State: { BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END' },
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn()
};
RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
  forceTouchAvailable: false
};

jest.mock('@react-native-firebase/app', () => {
  return () => ({
    auth: jest.fn(),
    setUserProperties: jest.fn(),
    setUserId: jest.fn(),
    setCurrentScreen: jest.fn()
  });
});

jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    auth: jest.fn()
  });
});

jest.mock('react-native-gesture-handler');

// jest.mock('@react-native-firebase/messaging',()=>{
//   return () => ({
//     messaging: jest.fn(),
//   })
// })
jest.mock('@react-navigation/native', () => {
  return {
    useRoute: () => ({
      params: (key) => {}
    }),
    useNavigation: () => ({
      navigate: (key) => {}
    })
  };
});
jest.mock('@react-native-community/push-notification-ios', () => ({
  addEventListener: jest.fn(),
  requestPermissions: jest.fn(() => Promise.resolve()),
  getInitialNotification: jest.fn(() => Promise.resolve())
}));

jest.setTimeout(30000);

// Mock Axios Api call
jest.mock('axios', () => ({
  post: jest.fn((_url, _body) => {
    return new Promise((resolve) => {
      url = _url;
      body = _body;
      resolve(true);
    });
  }),
  defaults: {
    timeout: 6000,
    headers: { 'Content-Type': 'application/json', 'X-Tenant-Identifier': 'tenantIdentifier' }
  },
  interceptors: {
    request: { use: jest.fn(), eject: jest.fn() },
    response: { use: jest.fn(), eject: jest.fn() }
  }
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    };
  }
}));
jest.mock('@react-navigation/stack', () => {
  return {
    ...jest.requireActual('@react-navigation/stack'),
    useHeaderHeight: jest.fn()
  };
});
