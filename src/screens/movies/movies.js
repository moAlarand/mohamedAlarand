import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {ErrorORNoInternet, SearchHeader, MoviesList} from '../../components';
import {MoviesContext} from '../../context/moviesContext';
import {useSelector} from 'react-redux';
export default () => {
  const {error, reload, loading, movies, getNextData} = useContext(
    MoviesContext,
  );
  const isConnected = useSelector(state => state.network.isConnected);
  let content;

  if (!isConnected || error) content = <ErrorORNoInternet onRetry={reload} />;
  else
    content = (
      <MoviesList
        {...{loading, getNextData}}
        movies={movies}
        onRefresh={reload}
      />
    );

  return (
    <>
      <SearchHeader />
      <View style={styles.container}>{content}</View>
    </>
  );
};
