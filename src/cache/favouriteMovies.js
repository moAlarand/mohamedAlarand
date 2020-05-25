import AsyncStorage from '@react-native-community/async-storage';
import {ErrorType, LocalError} from '../utils/Errors';

export default class FavMovies {
  getFavMovies = async () => {
    try {
      const movies = await AsyncStorage.getItem('fav_movies');
      const parseMovies = JSON.parse(movies);
      if (!parseMovies) return [];
      return parseMovies;
    } catch (error) {
      console.log('>>>>>>>>>>errorroor', error);

      throw LocalError(ErrorType.STORAGE_ERROR);
    }
  };

  setFavMovies = movies => {
    try {
      return AsyncStorage.setItem('fav_movies', JSON.stringify(movies));
    } catch (error) {
      console.log('>>>>>>>>>>errorroor', error);
      throw LocalError(ErrorType.STORAGE_ERROR);
    }
  };
}
