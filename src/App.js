import {Navigation} from 'react-native-navigation';
import registerScreens from './screens';
import onAppLaunch from './utils/appLanuch.js';
import {onAppStartConfig} from './utils/appConfig';

export const startApp = () => {
  onAppStartConfig();
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    onAppLaunch();
  });
};
