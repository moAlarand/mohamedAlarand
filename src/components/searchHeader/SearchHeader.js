import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import I18n from 'react-native-i18n';
import {AppHeader, commonStyles} from '../../common';
import SearchInput from './SearchInput';

export default props => {
  const {} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <AppHeader flat title={I18n.t('movies')} />
        <View style={styles.search}>
          <SearchInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    ...commonStyles.headerShadow,
  },
  search: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: 'white',
    alignSelf: 'stretch',
  },
});
