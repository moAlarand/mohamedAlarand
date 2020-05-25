import {SET_FAV_MOVIES} from './types';
import {favoritesMoviesRepo} from '../repo';

export default class FavActions {
  async getFavoriteMovies(dispatch) {
    const movies = await favoritesMoviesRepo.getMovies();
    dispatch({type: SET_FAV_MOVIES, payload: movies});
  }

  fav(dispatch, favMovies, movie) {
    const movies = [...favMovies, {...movie, isFav: true}];
    favoritesMoviesRepo.setMovies(movies);

    dispatch({type: SET_FAV_MOVIES, payload: movies});
  }

  unfav(dispatch, favMovies, movie) {
    const movies = [...favMovies.filter(mov => mov.id != movie.id)];
    favoritesMoviesRepo.setMovies(movies);
    dispatch({type: SET_FAV_MOVIES, payload: movies});
  }
}
