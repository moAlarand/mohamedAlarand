import {moviesApi} from '../api';

export default class MoviesRepo {
  constructor() {
    this.orderApi = moviesApi;
  }

  getSearchMovies = (page = 1, query = '', cancel) =>
    this.orderApi.getSearchMovies(page, query, cancel);

  getNextSearchMovies = async (data, page = 1, query = '', cancel) => {
    let newData = await this.orderApi.getSearchMovies(page, query, cancel);

    if (data)
      newData = {...newData, results: [...data.results, ...newData.results]};

    return newData;
  };

  mapFavourties = (movies, favMovies) => {
    const newMovies = movies.map(mov => {
      const isFound = favMovies.find(favMov => favMov.id == mov.id);
      if (isFound) return {...mov, isFav: true};
      else return {...mov, isFav: false};
    });
    return newMovies;
  };
}
