import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import globalStyles from '../styles/globalStyles';
import AddFavorite from '../components/AddFavorite';

const PlayScreen = ({navigation, route}) => {
    const { item } = route.params;

    if(item === null) {
        navigation.goBack(null)
    }

    return (
        <View style={globalStyles.playContainer}>
            <Text style={globalStyles.title}>{item.title}</Text>
            <AddFavorite item={item}/>
            <Video
                style={globalStyles.videoScreenContainer}
                // ref={(ref) => {
                //     this.player = ref;
                // }}
                source={{uri: item.videoFiles.mp4}}
                controls={true}
            />
        </View>
    )
}

export default PlayScreen;