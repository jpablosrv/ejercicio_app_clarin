import React, { useEffect, useState, useContext } from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { MainContext } from '../context/MainContext';
import { getList } from '../apis/api';
import ListadosPrincipales from '../components/ListadosPrincipales';

const MenuScreen = ({navigation}) => {
    const [listasVideos,setListasVideos] = useState({});
    const [isFetching,setPullRefresh] = useState(true);
    
    const { listas, setListas } = useContext(MainContext)


    useEffect(() => {
        if(!isFetching)
            return;
        const fetchData = async () => {
            const data = await getList();
            setListas(data);
        } 

        fetchData();
        setPullRefresh(false);
    }, [isFetching])

    const setPullRefreshHandler = (val) => {
        setPullRefresh(val)
    }

    return (
        <View style={globalStyles.container}>
            <Text>Listas Principales</Text>
            <ListadosPrincipales
                items={listas}
                pullRefreshHandler={setPullRefreshHandler}
                isFetching={isFetching}
                navigation={navigation}
            />
        </View>
    )
}

export default MenuScreen;
