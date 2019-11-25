import React, { useState, useEffect }from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import api from '../services/api';

import airbnblogo from '../assets/airbnblogo.png'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [cidades, setCidades] = useState('');

    useEffect(() => {
        {/* Confere se já tem o usuário e não volta para a tela de login */}
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('List')
            }
        })
    }, [])

    async function handleSubmit() {
        //email, cidades
        console.log(email);
        console.log(cidades);
        const response = await api.post('/sessions', {
            email
        })

        const { _id } = response.data;

        console.log(_id);

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('cidades', cidades);

        navigation.navigate('List');
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image
                source={airbnblogo}
                style={styles.imageLogo}
            />

            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>CIDADE</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Para onde?"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={cidades}
                    onChangeText={setCidades}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar hoteis</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageLogo: {
        width: 150,
        height: 150
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginBottom: 40
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 3
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});