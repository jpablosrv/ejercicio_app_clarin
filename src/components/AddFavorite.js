import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MainContext } from '../context/MainContext'
import { TouchableOpacity } from 'react-native-gesture-handler';

const AddFavorite = ({item}) => {

    if(item === null) {
        return (<></>)
    }

    const {favs, setFavs} = useContext(MainContext);

    const [enFavs, setEnFavs ] = useState(false);

    useEffect(() => {
        setEnFavs(favs.includes(item))
    }, [])

    const setFav = () => {
        if(enFavs) {
            setFavs(favs.filter( (elemento) => { return elemento.id != item.id }))
        } else {
            setFavs([...favs, item])
        }
        setEnFavs(!enFavs);
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setFav()}>
                { enFavs ? <Text>Sacar de Favoritos</Text> : <Text>Agregar a Favoritos</Text>}
            </TouchableOpacity>
        </View>
    )
}

export default AddFavorite

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 20
    }
})
