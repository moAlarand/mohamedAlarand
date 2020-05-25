import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getIconType} from './utils/icon';
import {getTheme} from './Theme';

export default class Icon extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
  };

  static defaultProps = {
    ...getTheme().icon,
  };

  render() {
    const {type, ...rest} = this.props;
    const NativeIcon = getIconType(type);

    return <NativeIcon {...rest} />;
  }
}
