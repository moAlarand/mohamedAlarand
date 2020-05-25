import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from './defaults/colors';

export default props => {
  const {size} = props;
  return <ActivityIndicator size={size || 30} color={colors.primary} />;
};
