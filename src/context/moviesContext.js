import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useCallback,
} from 'react';
import asyncReducer from '../reducers/asyncReducer';
import {moviesRepo} from '../repo';
import {useSelector} from 'react-redux';
import {asyncAction} from '../actions';

export const MoviesContext = createContext({});

export default MoviesContextProvider = ({children}) => {
  const favMovies = useSelector(state => state.favorites.movies);

  const isConnected = useSelector(state => state.network.isConnected);
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const [{loading, error, data}, dispatch] = useReducer(asyncReducer, {
    loading: true,
  });

  const _getData = useCallback(() => {
    asyncAction.reset(dispatch, {loading: true});
    return asyncAction.excute(
      cancel => moviesRepo.getSearchMovies(1, searchQuery, cancel),
      dispatch,
    );
  }, [dispatch, searchQuery]);

  const _getNextData = useCallback(() => {
    if (!data || data.page == data.total_pages) return;
    return asyncAction.excute(
      cancel =>
        moviesRepo.getNextSearchMovies(
          data,
          data ? data.page + 1 : 1,
          searchQuery,
          cancel,
        ),
      dispatch,
    );
  }, [data, dispatch, searchQuery]);

  const _updateDataWithFavourite = useCallback(() => {
    const newMovies = moviesRepo.mapFavourties(data.results, favMovies);
    setMovies(newMovies);
  }, [favMovies, data]);

  useEffect(() => {
    if (isConnected) _getData();
    return () => asyncAction.cancel();
  }, [isConnected]);

  useEffect(() => {
    if (favMovies && data) {
      _updateDataWithFavourite();
    }
  }, [data, favMovies]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        loading,
        error,
        setSearchQuery,
        reload: _getData,
        getSearchMovies: _getData,
        getNextData: _getNextData,
        searchQuery,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};
