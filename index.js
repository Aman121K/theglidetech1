import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import addReactNDevTools from 'reactn-devtools';

if (__DEV__) {
  addReactNDevTools();
}

AppRegistry.registerComponent(appName, () => App);
