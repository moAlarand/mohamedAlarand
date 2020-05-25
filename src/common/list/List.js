import React, {useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import ListFooter from './ListFooter';
import colors from '../defaults/colors';

export default props => {
  const {data, loading, onRefresh, NoResultComponent, ...rest} = props;

  if ((!data || !data.length) && !loading) return <NoResultComponent />;

  return (
    <FlatList
      extraData={data}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      initialNumToRender={20}
      maxToRenderPerBatch={30}
      data={data}
      keyExtractor={(item, index) => String(item.id || index)}
      onEndReachedThreshold={1}
      scrollEventThrottle={1000}
      ListFooterComponent={<ListFooter loading={loading} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onRefresh}
          colors={[colors.primary]}
          tintColor={colors.primary}
        />
      }
      {...rest}
    />
  );
};
