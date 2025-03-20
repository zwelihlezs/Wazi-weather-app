import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function Settings() {
    return (
        <SafeAreaView>
            <View>
                <Text>Settings of the App</Text>
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
