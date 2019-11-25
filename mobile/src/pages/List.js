import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Image, AsyncStorage, StyleSheet, ScrollView} from 'react-native';

import SpotList from '../components/SpotList';

import airbnblogo from '../assets/airbnblogo.png';

export default function List() {
    const [cidades, setCidades] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('cidades').then(storagedCidades => {
            const cidadesArray = storagedCidades.split(',').map(cidade => cidade.trim());

            setCidades(cidadesArray);
        })
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.imageLogo}
            source={airbnblogo} />

            <ScrollView>
            {cidades.map(cidade => (
                <SpotList cidade={cidade} key={cidade} />
            ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageLogo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 40,
    }
})