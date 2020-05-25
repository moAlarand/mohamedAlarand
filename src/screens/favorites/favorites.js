import React from 'react';
import {View, Text} from 'react-native';
import {AppHeader} from '../../common';
import I18n from 'react-native-i18n';
import {MoviesList} from '../../components';
import {useSelector} from 'react-redux';

export default () => {
  const movies = useSelector(state => state.favorites.movies);
  return (
    <>
      <AppHeader title={I18n.t('favourites')} />
      <View style={{flex: 1,    backgroundColor:'#f7f7f7'}}>
        <MoviesList movies={movies} />
      </View>
    </>
  );
};
