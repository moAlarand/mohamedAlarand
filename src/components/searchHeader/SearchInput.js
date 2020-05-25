import React, {useContext, useState} from 'react';
import {View, StyleSheet, Platform, TextInput} from 'react-native';
import I18n from 'react-native-i18n';
import {commonStyles, AppIcon, AppIconButton} from '../../common';
import {MoviesContext} from '../../context/moviesContext';
import colors from '../../common/defaults/colors';

export default props => {
  const {} = props;
  const {getSearchMovies, setSearchQuery} = useContext(MoviesContext);
  return (
    <View style={styles.container}>
      <TextInput
        underlineColorAndroid="transparent"
        keyboardType="visible-password"
        placeholder={I18n.t('search')}
        style={styles.input}
        onSubmitEditing={getSearchMovies}
        onChangeText={setSearchQuery}
      />
      <AppIconButton
        style={{backgroundColor: '#e98827', borderRadius: 40, margin: 5}}
        size={25}
        name={Platform.OS == 'ios' ? 'ios-search' : 'md-search'}
        type="ion"
        color="white"
        onPress={getSearchMovies}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    ...commonStyles.headerShadow,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 20,
    alignSelf: 'stretch',
    fontWeight: 'bold',
  },
});
