import React, { useEffect, useState, useContext } from 'react';
import { Text, View, RefreshControl, SafeAreaView } from 'react-native';
import { getHome, getList } from '../apis/api';
import ListaVideosHome from '../components/ListaVideosHome';
import globalStyles from '../styles/globalStyles';
import { MainContext } from '../context/MainContext';

const FavsScreen = ({navigation}) => {
    const { favs, setFavs } = useContext(MainContext);


    return (
        <SafeAreaView style={globalStyles.container}>
            <View >
                <Text>Videos Favoritos</Text>
                {
                    favs && favs.length > 0 && 
                    <ListaVideosHome
                        videos={favs}
                        pullRefreshHandler={null}
                        isFetching={false}
                        navigation={navigation}
                    />
                }
                {
                    favs && favs.length === 0 &&
                    <Text>
                        No tiene ningun video en Favoritos
                    </Text>
                }
            </View>
        </SafeAreaView>

    )
}

export default FavsScreen