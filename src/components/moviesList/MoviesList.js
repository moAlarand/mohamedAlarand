import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppList} from '../../common';
import MovieCard from '../movieCard/MovieCard';
import NoResultMovies from './NoResultMovies';

export default ({loading, onRefresh, movies, getNextData}) => {
  console.log('>>>>>>>>>>> refrsh', movies, loading);
  return (
    <AppList
      onEndReached={getNextData}
      contentContainerStyle={styles.container}
      loading={loading || !movies}
      NoResultComponent={() => <NoResultMovies />}
      data={movies}
      onRefresh={onRefresh}
      renderItem={({item}) => <MovieCard movie={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
