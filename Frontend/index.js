/**
 * @format
 */

import {AppRegistry} from 'react-native';

import { StackNavigation } from '@react-navigation/native';

import {name as appName} from './app.json';

import App from './App';
import add from './screens/Account'
import adde from './screens/SignUp'
import ahmed from './screens/SignIn'
import ahmed2 from './screens/FlashScreen'

AppRegistry.registerComponent(appName, () => App);
