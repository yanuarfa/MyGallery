/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TextInANest from './TextInANest';
import Login from './screens/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => TextInANest);
AppRegistry.registerComponent(appName, () => Login);
