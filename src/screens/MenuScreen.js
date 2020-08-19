import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const MenuScreen = () => {
    const [listasVideos,setListasVideos] = useState({});
    const [isFetching,setPullRefresh] = useState(true);
    
    const { listas, setListas } = useContext(MainContext)


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
            <Text>Listas Principales</Text>
            <ListaVideosHome
                videos={videos}
                pullRefreshHandler={setPullRefreshHandler}
                isFetching={isFetching}
                navigation={navigation}
            />
        </View>
    )
}

export default MenuScreen;
