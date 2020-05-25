import {cachedFavoriteMovies} from '../cache';

export default class FavoritesMoviesRepo {
  constructor() {
    this.cachedFavoriteMovies = cachedFavoriteMovies;
  }

  getMovies = async () => {
    let movies = [];
    try {
      movies = await this.cachedFavoriteMovies.getFavMovies();
    } catch (error) {}

    return movies;
  };

  setMovies = async movies => {
    try {
      await this.cachedFavoriteMovies.setFavMovies(movies);
      return true;
    } catch (error) {
      return false;
    }
  };
}
