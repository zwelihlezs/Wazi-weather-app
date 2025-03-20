import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function MapSearch() {
    return (
        <SafeAreaView>
            <View>
                <Text>Search location by using map</Text>
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
    }
});
