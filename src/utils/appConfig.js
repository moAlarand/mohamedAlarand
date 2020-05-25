import {I18nManager} from 'react-native';
import I18n from 'react-native-i18n';
// import ar from '../translations/ar.json';
import en from '../translations/en.json';
import store from '../store/store';
import {LocaleEn, LocaleAr} from '../common';
import {apiConfig} from '../utils/apiLib';
import {favActions} from '../actions';
import {initInternetConnection} from '../actions/networkActions';

const localizationConfig = () => {
  // localiztion

  I18nManager.allowRTL(false);
  I18n.locale = 'en';
  I18n.translations = {
    en: {...LocaleEn, ...en},
  };
};

export const onAppStartConfig = () => {
  localizationConfig();
  // registerCustomIconType('custom', icoMoonConfig);
};

export const onAppLanuchConfig = () => {
  apiConfig();
  initInternetConnection(store.dispatch);
  favActions.getFavoriteMovies(store.dispatch);
};
