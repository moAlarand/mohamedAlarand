import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import no_Internet_or_error from '../assets/imgs/no-Internet-or-error.png';
import {AppButton} from '../common';
import I18n from 'react-native-i18n';

export default props => {
  const {onRetry} = props;
  return (
    <View style={styles.container}>
      <FastImage
        source={no_Internet_or_error}
        style={{width: 300, height: 250, marginVertical: 10}}
        resizeMode={FastImage.resizeMode.contain}
      />
      <AppButton
        style={{width: 100}}
        title={I18n.t('retry')}
        onPress={onRetry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});
