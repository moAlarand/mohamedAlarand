import {Navigation} from 'react-native-navigation';
import moviesIcon from '../assets/imgs/movies.png';
import favoritesIcon from '../assets/imgs/favorites.png';
import moviesFillIcon from '../assets/imgs/movies_fill.png';
import favoritesFillIcon from '../assets/imgs/favorites_fill.png';
import colors from '../common/defaults/colors';

export const navigateToHome = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'movies',
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: moviesIcon,
                  selectedIcon: moviesFillIcon,
                  iconColor: '#6F6F6F',
                  selectedIconColor: colors.primary,
                  selectedTextColor: colors.primary,
                  textColor: '#6F6F6F',
                  text: 'movies',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'favorites',
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: favoritesIcon,
                  iconColor: '#6F6F6F',
                  selectedIcon: favoritesFillIcon,
                  selectedIconColor: colors.primary,
                  selectedTextColor: colors.primary,
                  textColor: '#6F6F6F',
                  text: 'favorites',
                },
              },
            },
          },
        ],
      },
    },
  });
};
