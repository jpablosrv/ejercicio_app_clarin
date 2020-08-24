import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import globalStyles from '../styles/globalStyles';
import AddFavorite from '../components/AddFavorite';
import ErrorComponent from '../components/ErrorComponent';

const PlayScreen = ({navigation, route}) => {
    const { item } = route.params;

    if(item === null) {
        navigation.goBack(null)
    }

    const videoError = () => {
        return (<ErrorComponent/>)
    }

    return (
        <View style={globalStyles.playContainer}>
            <Text style={globalStyles.title}>{item.title}</Text>
            <AddFavorite item={item}/>
            <Video
                style={globalStyles.videoScreenContainer}
                on
                onError={videoError}
                source={{uri: item.videoFiles.mp4}}
                controls={true}
            />
        </View>
    )
}

export default PlayScreen;