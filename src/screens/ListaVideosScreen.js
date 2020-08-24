import React, { useEffect, useState } from 'react';
import { Text, View, RefreshControl } from 'react-native';
import { getListById } from '../apis/api';
import ListaVideosHome from '../components/ListaVideosHome';
import globalStyles from '../styles/globalStyles';
import LoadingSpin from '../components/LoadingSpin';

const ListaVideosScreen = ({navigation, route}) => {
    const { idLista } = route.params;

    const [pagingData,setPagingData] = useState({page:10, fetching: false, moreItems: true});
    const [isFetching,setPullRefresh] = useState(true);
    const [videos, setVideos] = useState([]);



    useEffect(() => {
        if(!isFetching)
            return;
        const fetchData = async () => {
            const {items, moreItems} = await getListById(idLista, 0, 10);
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
            const {items, moreItems} = await getListById(idLista, page, 10);
            const itemsArray = moreItems ?  items : [ ...items, {id: 'NOMOREITEMS'}];
            setVideos([...videos, ...itemsArray]);
            setPagingData({...pagingData, fetching: false, page: page + 10, moreItems });
        }
    }

    return (
        <View style={globalStyles.container}>
            <Text>Listas de Videos</Text>
            <Text>ID: {idLista}</Text>
            <ListaVideosHome
                videos={videos}
                pullRefreshHandler={setPullRefreshHandler}
                setEndReachedHandler={setEndReachedHandler}
                isFetching={isFetching}
                navigation={navigation}
                moreItems={pagingData.moreItems}
            />
        </View>
    )
}

export default ListaVideosScreen;
