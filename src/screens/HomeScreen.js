import React, { useEffect, useState, useContext } from 'react';
import { Text, View, RefreshControl } from 'react-native';
import { getHome, getList, getNext } from '../apis/api';
import ListaVideosHome from '../components/ListaVideosHome';
import globalStyles from '../styles/globalStyles';
import { MainContext } from '../context/MainContext';
import LoadingSpin from '../components/LoadingSpin';

const HomeScreen = ({navigation}) => {

    const [pagingData,setPagingData] = useState({page:10, fetching: false, moreItems: true});
    const [isFetching,setPullRefresh] = useState(true);
    
    const { videos, setVideos, setFetchingData } = useContext(MainContext)


    useEffect(() => {
        if(!isFetching)
            return;
        const fetchData = async () => {
            const { items, moreItems } = await getHome();
            setVideos(items);
            setPagingData({...pagingData, moreItems});
        } 

        fetchData();
        setPullRefresh(false);
    }, [isFetching])

    const setPullRefreshHandler = (val) => {
        setPullRefresh(val)
    }

    const setEndReachedHandler = async () => {
        const { fetching, page, moreItems } = pagingData;
        
        if(!fetching && moreItems) {
            setPagingData({...pagingData, fetching: true});
            const {items, moreItems } = await getNext(10, page);
            const itemsArray = moreItems ?  items : [ ...items, {id: 'NOMOREITEMS'}];
            setVideos([...videos, ...itemsArray]);
            setPagingData({...pagingData, fetching: false, page: page + 10, moreItems});
        }
    }

    return (
        <View style={globalStyles.container}>
            <Text>Home Screen</Text>
            <ListaVideosHome
                videos={videos}
                pullRefreshHandler={setPullRefreshHandler}
                setEndReachedHandler={setEndReachedHandler}
                isFetching={isFetching}
                navigation={navigation}
            />
        </View>
    )
}

export default HomeScreen;
