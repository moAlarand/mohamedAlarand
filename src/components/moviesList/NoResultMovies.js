import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import I18n from 'react-native-i18n';
import FastImage from 'react-native-fast-image';
import no_search_results from '../../assets/imgs/no-search-results.png';

export default () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={no_search_results}
        style={{width: 250, height: 200, marginVertical: 10}}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.text}>{I18n.t('no-search-results')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});
