import React from 'react';
import { SafeAreaView,StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function Landing() {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.view}>Landing Page</Text>
                <Text style={styles.text}>This page is loaded when app is run for the first time</Text>
            </View>
            
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
    text: {
        color: 'grey',
        padding: 20,
    },




});