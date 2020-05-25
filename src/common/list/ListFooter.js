import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Indicator from '../Indicator';

export default props => {
  const {loading} = props;
  return <View style={styles.footer}>{loading && <Indicator />}</View>;
};

const styles = StyleSheet.create({
  footer: {
    alignSelf: 'stretch',
    // alignContent: 'center',
    alignItems: 'center',
  },
});
