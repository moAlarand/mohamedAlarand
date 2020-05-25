import React from 'react';
import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from '../store/store';
import movies from './movies/movies';
import favorites from './favorites/favorites';
import MoviesContextProvider from '../context/moviesContext';

///// screens

const screens = [
  {name: 'movies', Screen: movies, ContextProvider: MoviesContextProvider},
  {name: 'favorites', Screen: favorites},
];

/// create Screen
function createScreen(screen) {
  const {name, Screen, ContextProvider, menu} = screen;

  let ScreenWraper;

  if (ContextProvider) {
    ScreenWraper = props => (
      <ContextProvider {...props}>
        <Screen />
      </ContextProvider>
    );
  } else {
    ScreenWraper = props => <Screen {...props} />;
  }

  Navigation.registerComponent(name, () =>
    gestureHandlerRootHOC(props => (
      <Provider store={store}>
        <ScreenWraper {...props} />
      </Provider>
    )),
  );
}

//// register fun
export default registerScreens = () => {
  screens.forEach(screen => createScreen(screen));
};
