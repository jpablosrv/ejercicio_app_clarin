import React from 'react';
import {View, Text, Image, RefreshControl} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';

import {getUriImage} from '../utils/common';
import ErrorComponent from './ErrorComponent';

const ListaVideosHome = ({
  navigation,
  videos,
  pullRefreshHandler,
  isFetching,
  setEndReachedHandler,
  moreItems= true
}) => {

  const showVideoHandler = (item) => {
    navigation.navigate('PlayVideo', {
      item,
      navigation,
    });
  };

  return (
    <View style={globalStyles.listaVideosHomeContainer}>
      <FlatList
        refreshControl={ <RefreshControl refreshing={isFetching} onRefresh={() => pullRefreshHandler(true)} /> }
        keyExtractor={(items, index) => String(index)}
        onEndReached={setEndReachedHandler}
        ListEmptyComponent={() => <></>}
        data={videos}
        renderItem={({item}) => {
          if(item.id === 'NOMOREITEMS') {
            return (       
              <>
                <Text style={{marginTop: 20, alignSelf: 'center'}}>Ah llegado al final !!! Si vio todos los videos, por favor,</Text>
                <Text style={{marginBottom: 20, alignSelf: 'center'}}>descanse los ojos!!</Text>
              </>
          )}

          if(!item.related?.relatedImages) {
            return (<ErrorComponent />)
          }


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
