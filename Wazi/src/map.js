import React from 'react';
import { View, Text, SafeAreaView, StyleSheet,Image } from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import icon from '../assets/wazi-icon1.png' ;

const Stack = createNativeStackNavigator();

export default function MapSearch() {
    return (
        <SafeAreaView>
            <View>
                
                <View>
                    {/* Top Banner Component */}
                    <TouchableOpacity style={styles.banner}
                        onPress={() => { alert('ClicKeD') }}>
                        <Image style={styles.icon} source={'icon'} />

                        <Text style={{ marginRight: 5 }}>Menu</Text>
                    </TouchableOpacity>
                </View>
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
    

});
