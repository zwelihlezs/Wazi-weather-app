import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import icon from '../assets/wazi-icon1.png';

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MapSearch({navigation}) {
    return (
        <SafeAreaView>
            <View>

                <View>
                    {/* Top Banner Component */}
                    <TouchableOpacity style={styles.banner}
                        onPress={() => { alert('ClicKeD') }}>
                        <Image style={styles.icon} source={icon} />

                        <Text style={{ marginRight: 5 }}>Menu</Text>
                    </TouchableOpacity>
                </View>



                {/* Map */}
                <View style={styles.mapComp}>
                    <MapView style={styles.map} />
                </View>
                <TouchableOpacity style={styles.getButton}>
                    <Text style={{margin:4,padding:5,}}>Get Weather</Text>
                </TouchableOpacity>
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
    banner: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: windowWidth,
        top: 0,
        right: 0,
        left: 0,
        height: 36,
        backgroundColor: '#e7f0f1',
        zIndex: 1000,
    },
    icon: {
        height: 35,
        width: 68
    },
    mapComp: {
    },
    map:{
        width:120,
        height: 120
    },
    getButton:{
        backgroundColor: 'rgba(0,241,218,0.5)',
        width:97,
        borderRadius:12,
        alignSelf: 'center'
    }

});
