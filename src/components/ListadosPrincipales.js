import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListadosPrincipales = ({navigation,items}) => {
    const showVideoListHandler = (id) => {
        navigation.navigate('ListaVideos', {
            idLista: id,
            navigation,
        });
    };

    if(!items) {
        return (
            <View>
                <Text>No hay elementos</Text>
            </View>
        )
    }

    return (
        <ScrollView style={{width: '90%'}}>
            <Text>Listado</Text>
            <FlatList
                data={items}
                renderItem={(item) => {
                    const {  item: { _id } } = item;
                    return (
                        <TouchableOpacity 
                            style={styles.renderContainer}
                            onPress={() => { showVideoListHandler(_id) }}
                        >
                            <Text style={styles.title}>{item.item.name}</Text>
                            <Text>ID : {item.item._id}</Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item, index) => String(index)}
            />
        </ScrollView>
    )
}

export default ListadosPrincipales

const styles = StyleSheet.create({
    renderContainer:{
        marginVertical: 5,
        flex: 1,
        borderWidth: 1
    },
    title: {
        width: '100%',
        fontSize: 20
    }
})
