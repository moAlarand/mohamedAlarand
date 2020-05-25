import {StyleSheet} from 'react-native';
import {commonStyles} from '../../common';
export default StyleSheet.create({
  card: {
    height: 179,
    marginBottom: 10,
    alignSelf: 'stretch',
    borderRadius: 4,
    flexDirection: 'row',
    ...commonStyles.cardShadow,
  },
  content: {
    padding: 7,
    alignSelf: 'stretch',
    width: '60%',
  },
  img: {borderRadius: 4, width: '40%', height: 179, backgroundColor: '#d7d7d7'},
  title: {fontWeight: 'bold', fontSize: 20, color: '#555555'},
  rating: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  desc: {
    color: '#d7d7d7',
  },
  year: {
    marginVertical: 5,
    color: '#d7d7d7',
  },
  actions: {
    flexDirection: 'row',
  },
});
