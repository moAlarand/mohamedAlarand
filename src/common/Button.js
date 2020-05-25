import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getTheme} from './Theme';
import {RectButton} from 'react-native-gesture-handler';
import {Text} from 'react-native';

export default class Button extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const {title,style, ...rest} = this.props;

    return (
      <RectButton style={[style,getTheme().Button]} {...rest}>
        <Text style={{color: 'white'}}>{title}</Text>
      </RectButton>
    );
  }
}
