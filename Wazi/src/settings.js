import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

export default function Settings({ navigation }) {
const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);

    return (
        <SafeAreaView>
                <View>
                    <TouchableOpacity><Text>Celcius</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Fahrenheit</Text></TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity><Text>Lihgt Mode</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Dark Mode</Text></TouchableOpacity>
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
