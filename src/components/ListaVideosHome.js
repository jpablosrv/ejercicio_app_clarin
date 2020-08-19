import React from 'react';
import {View, Text, Image, RefreshControl} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';

import {getUriImage} from '../utils/common';

const ListaVideosHome = ({
  navigation,
  videos,
  pullRefreshHandler,
  isFetching,
}) => {
  const showVideoHandler = (item) => {
    console.log('Item desde la lista : ', item);
    navigation.navigate('Play', {
      item,
      navigation,
    });
  };

  return (
    <View style={globalStyles.listaVideosHomeContainer}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={() => pullRefreshHandler(true)}
          />
        }
        ListEmptyComponent={() => <></>}
        data={videos}
        renderItem={({item}) => {
          const urlImg = {uri: getUriImage(item.related.relatedImages)};
          return (
            <TouchableOpacity
              key={item.id.toString()}
              style={globalStyles.itemContainer}
              onPress={() => {
                showVideoHandler(item);
              }}>
              <Text>{item.title}</Text>
              <Image source={urlImg} style={globalStyles.imgVideo} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ListaVideosHome;
