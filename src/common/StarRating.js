import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Colors from './defaults/colors';
import {View} from 'react-native';
import Icon from './Icon';

export default class StarRating extends Component {
  static propTypes = {
    size: PropTypes.number,
    rate: PropTypes.number,
    maxStars: PropTypes.number,
  };

  static defaultProps = {
    size: 12,
    maxStars: 5,
    rate: 0,
    emptyStar: 'star',
    emptyStarColor: '#c9c9c9',
    fullStar: 'star',
    fullStarColor: Colors.star,
    halfStar: 'star-half-empty',
    halfStarColor: Colors.star,
    iconSet: 'font-awesome',
  };

  renderStars = () => {
    const {
      emptyStar,
      emptyStarColor,
      fullStar,
      fullStarColor,
      halfStar,
      halfStarColor,
      iconSet,
      size,
      starPaddingHorizontal,
      maxStars,
      starStyle,
      rate,
    } = this.props;

    const nodes = [];

    let starsLeft = Math.round(rate * 2) / 2;

    for (let i = 0; i < maxStars; i++) {
      let starIconName = emptyStar;
      let starIconColor = emptyStarColor;

      if (starsLeft >= 1) {
        starIconName = fullStar;
        starIconColor = fullStarColor;
      } else if (starsLeft === 0.5) {
        starIconName = halfStar;
        starIconColor = halfStarColor;
      }

      nodes.push(
        <View
          key={i}
          style={{paddingHorizontal: (i && starPaddingHorizontal) || 0}}>
          <Icon
            name={starIconName}
            type={iconSet}
            color={starIconColor}
            size={size}
            style={starStyle}
          />
        </View>,
      );

      starsLeft -= 1;
    }

    return nodes;
  };

  render() {
    const {style} = this.props;
    return (
      <View style={[{flexDirection: 'row'}, style]}>{this.renderStars()}</View>
    );
  }
}
