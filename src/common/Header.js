import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {APPBAR_HEIGHT} from './utils/responsiveDimensions';
import stylescommon from './styles/styles';

export default props => {
  const {title, flat} = props;
  return (
    <SafeAreaView
      style={[styles.container, !flat && stylescommon.headerShadow]}>
      <View style={[styles.container, !flat && styles.shadow]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: APPBAR_HEIGHT,
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
