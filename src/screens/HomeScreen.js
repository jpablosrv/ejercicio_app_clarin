import React, { useEffect, useState, useContext } from 'react';
import { Text, View, RefreshControl } from 'react-native';
import { getHome, getList } from '../apis/api';
import ListaVideosHome from '../components/ListaVideosHome';
import globalStyles from '../styles/globalStyles';
import { MainContext } from '../context/MainContext';
import LoadingSpin from '../components/LoadingSpin';

const HomeScreen = ({navigation}) => {

    const [listasVideos,setListasVideos] = useState({});
    const [isFetching,setPullRefresh] = useState(true);
    
    const { videos, setVideos, setFetchingData } = useContext(MainContext)


    useEffect(() => {
        if(!isFetching)
            return;
        const fetchData = async () => {
            const data = await getHome();
            setVideos(data);
        } 

        fetchData();
        setPullRefresh(false);
    }, [isFetching])

    const setPullRefreshHandler = (val) => {
        //console.log('Refreshing Pull to refresh');
        setPullRefresh(val)
    }

    return (
        <View style={globalStyles.container}>
            <Text>Home Screen</Text>
            <ListaVideosHome
                videos={videos}
                pullRefreshHandler={setPullRefreshHandler}
                isFetching={isFetching}
                navigation={navigation}
            />
        </View>
    )
}

export default HomeScreen;
