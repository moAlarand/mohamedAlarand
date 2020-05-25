import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {AppStarRating, AppIconButton} from '../../common';
import moment from 'moment';
import colors from '../../common/defaults/colors';
import {POSTER_URL} from '../../utils/urls';
import {favActions} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import Share from 'react-native-share';

export default props => {
  const favMovies = useSelector(state => state.favorites.movies);

  const {movie} = props;
  const {
    poster_path,
    original_title,
    overview,
    vote_average,
    release_date,
    isFav,
  } = movie;

  const dispatch = useDispatch();

  const onFavToggle = useCallback(() => {
    if (isFav) favActions.unfav(dispatch, favMovies, movie);
    else favActions.fav(dispatch, favMovies, movie);
  }, [dispatch, favMovies, movie]);

  const _share = useCallback(() => {
    Share.open({url: `${POSTER_URL}${poster_path}`});
  });

  return (
    <View style={styles.card}>
      <FastImage
        style={styles.img}
        source={{
          uri: `${POSTER_URL}${poster_path}`,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {original_title}
        </Text>

        <AppStarRating
          starPaddingHorizontal={2}
          style={styles.rating}
          rate={vote_average}
          maxStars={10}
        />
        <Text numberOfLines={2} style={styles.desc}>
          {overview}
        </Text>
        <Text style={styles.year}>
          {moment(release_date).format('YYYY   DD/MMM')}
        </Text>

        <View style={styles.actions}>
          <AppIconButton
            color={isFav ? colors.primary : '#050505'}
            name={isFav ? 'favorite' : 'favorite-border'}
            type="material"
            size={20}
            onPress={onFavToggle}
          />
          <AppIconButton
            style={{marginLeft: 10}}
            size={20}
            type="material"
            name="share"
            color="#050505"
            onPress={_share}
          />
        </View>
      </View>
    </View>
  );
};
