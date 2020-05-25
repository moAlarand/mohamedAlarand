import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getIconType} from './utils/icon';
import {getTheme} from './Theme';
import {RectButton} from 'react-native-gesture-handler';
import colors from './defaults/colors';

export default class Icon extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
  };

  static defaultProps = {
    ...getTheme().icon,
  };

  render() {
    const {type, name, color, size, iconStyle, style, ...rest} = this.props;
    const NativeIcon = getIconType(type);

    return (
      <RectButton
        {...rest}
        style={[
          {
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}>
        <NativeIcon
          name={name}
          color={color}
          type={type}
          size={size}
          style={iconStyle}
        />
      </RectButton>
    );
  }
}
