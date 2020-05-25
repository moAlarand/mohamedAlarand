import {navigateToHome} from '../navigation/AppNavigation';
import {onAppLanuchConfig} from './appConfig';
import SplashScreen from 'react-native-splash-screen';

export default () => {
  onAppLanuchConfig();
  navigateToHome();

  setTimeout(() => {
    SplashScreen.hide();
  }, 3000);
};
