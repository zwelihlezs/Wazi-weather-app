import React from 'react';
import { TextInput, Dimensions } from 'react-native';
import { SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import logo from '../assets/wazi.png';
//import Search from './search';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Landing({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoView}>
                <Image style={styles.logo} source={logo} />
            </View>
            <View style={styles.input}>
                <Text style={styles.titleText}>Please enter your City/Town</Text>
                <TextInput style={styles.textInputComp} placeholder='Pretoria' onChangeText={() => navigation.navigate('Search')}></TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
                <Text style={styles.buttonText}>Get Weather</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        backgroundColor: 'purple',
        // height: 55,
        // width: 180,
    },
    logoView: {
        marginTop: -(windowHeight * 25 / 100),
    },
    logo: {
        marginTop: 0,
        width: 330,
        height: 330

    },
    textInputComp: {
        backgroundColor: '#31e5d9',
        fontSize: 17,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        width: 248,
    },
    titleText: {
        fontSize: 18,
        alignSelf: 'center',
        paddingBottom: 15
    },
    text: {
        fontSize: 17,
        color: '#363931',
        padding: 20,
    },
    button: {
        backgroundColor: '#00bf',
        margin: 20,
        borderRadius: 25,
        padding: 0.6

    },
    buttonText: {
        backgroundColor: '#00b8f1',
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 1.8,
        paddingVertical: 14,
        paddingHorizontal: 30
    },




});