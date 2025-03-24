import React from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity, Image, Dimensions } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
// import map from './map.js';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import icon from '../assets/wazi-icon1.png';
import mapIcon from '../assets/gps.png';
import pc from '../assets/condition/partly-cloudy.png';
import sun from '../assets/condition/sun.png';
import rain from '../assets/condition/rain.png';
import cloud from '../assets/condition/cloud.png';
import windy from '../assets/condition/windy.png';
import storm from '../assets/condition/storm.png';
import { ScrollView } from 'react-native';

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Search({navigation}) {
    return (
        <SafeAreaView>
            
                <View>
                    {/* Top Banner Component */}
                    <TouchableOpacity style={styles.banner}
                        onPress={() => { alert('ClicKeD') }}>
                        <Image style={styles.icon} source={icon} />

                        <Text style={{ marginRight: 5 }}>Menu</Text>
                    </TouchableOpacity>
                </View>
            <ScrollView>
                <View>
                    {/* Search Component */}
                    <View style={styles.searchComp}>
                        <TextInput style={styles.searchInput} onChangeText={() => { }} value={'Pretoria'} />
                        <TouchableOpacity style={{backgroundColor:'#f9f9f9'}} onPress={()=>navigation.navigate('Map')}>
                        <Image style={styles.mapIcon} source={mapIcon}  />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.cityResults}>
                        <View style={styles.cityTime}>
                            <Text style={{ color: '#363931', fontSize: 22 }}>{'Pretoria'}</Text>
                            <Text style={styles.timeText}>{'22 mar, Sat'}</Text>
                        </View>
                        <View style={styles.cityInfo}>
                            <View>
                                <Image style={{ width: windowWidth / 3.7, height: 70 }} source={pc} />
                            </View>
                            <View>
                                <Text style={{ color: '#ed281a', fontSize: 48, padding: 5, }}>21`c</Text>
                            </View>
                            <View style={styles.cityConditions}>
                                <Text style={{ color: '#363931', fontSize: 16 }}>Light Rain</Text>
                                <Text style={{ color: '#363931', fontSize: 16 }}>NW 15 km winds</Text>
                                <Text style={{ color: '#363931', fontSize: 16 }}>66% Humidity</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#363931', fontSize: 18 }}>Today</Text>
                        </View>
                        <View style={styles.forecast}>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>06:00</Text>
                                <Text style={{ color: 'ed281a' }}>25`c</Text>
                                <Image style={{ width: 35, height: 35 }} source={pc} />
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 16km wind</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>07:00</Text>
                                <Text style={{ color: 'ed281a' }}>30`c</Text>
                                <Image style={{ width: 35, height: 35 }} source={sun} />
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 13km wind</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>08:00</Text>
                                <Text style={{ color: 'ed281a' }}>20`c</Text>
                                <Image style={{ width: 35, height: 35 }} source={cloud} />
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 24km wind</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>09:00</Text>
                                <Text style={{ color: 'ed281a' }}>19`c</Text>
                                <Image style={{ width: 35, height: 35 }} source={storm} />
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 21km wind</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>10:00</Text>
                                <Text style={{ color: 'ed281a' }}>23`c</Text>
                                <Image style={{ width: 35, height: 35 }} source={rain} />
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 26km wind</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>11:00</Text>
                                <Text style={{ color: 'ed281a' }}>29`c</Text>
                                <Image style={{ width: 35, height: 35 }} source={windy} />
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 18km wind</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 4, backgroundColor: 'rgba(0,184,241,0.3)', borderRadius: 14, margin: 4 }}>
                        <View >
                            <Text style={{ color: '#363931', fontSize: 16 }}>Pretoria</Text>
                        </View>
                        <View style={styles.cityResults1}>

                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Sun</Text>
                                <Image style={{ width: 35, height: 35 }} source={pc} />
                                <Text style={{ color: 'ed281a' }}>25`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 16km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>34% Humid</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Mon</Text>
                                <Image style={{ width: 35, height: 35 }} source={sun} />
                                <Text style={{ color: 'ed281a' }}>30`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 13km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>56% Humid</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Tue</Text>
                                <Image style={{ width: 35, height: 35 }} source={cloud} />
                                <Text style={{ color: 'ed281a' }}>20`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 24km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>75% Humid</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Wed</Text>
                                <Image style={{ width: 35, height: 35 }} source={storm} />
                                <Text style={{ color: 'ed281a' }}>19`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 21km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>88% Humid</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Thur</Text>
                                <Image style={{ width: 35, height: 35 }} source={rain} />
                                <Text style={{ color: 'ed281a' }}>23`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 26km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>65% Humid</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Fri</Text>
                                <Image style={{ width: 35, height: 35 }} source={windy} />
                                <Text style={{ color: 'ed281a' }}>29`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 18km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>58% Humid</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.citiesPreview}>
                        <View style={styles.cityPreview}>
                            <Text style={{fontSize:15,color:'#363931'}}>Durban</Text>
                            <Text style={{fontSize:22,color:'#ed281a'}}>29`c</Text>
                            <Text style={{fontSize:16}}>Sunny</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
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
    icon: {
        height: 35,
        width: 68
    },
    banner: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: windowWidth,
        top: 0,
        right: 0,
        left:0,
        height: 36,
        backgroundColor: '#e7f0f1',
        zIndex:1000,
    }
    ,
    searchComp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        padding: 1,
    },
    searchInput: {
        borderRadius: 21,
        borderWidth: 1,
        // borderEndColor: '#e7f0f1',
        color: '#363931',
        backgroundColor: 'rgba(49,229,217,0.3)',
        width: windowWidth - (windowWidth / 6),
        paddingStart: 10,
    },
    mapIcon: {
        height: 35,
        width: 35,
        margin: 4
    },
    cityResults: {

        backgroundColor: 'rgba(0,184,241,0.3)',
        margin: 5,
        padding: 8,
        borderRadius: 11,
    },
    cityResults1: {
        flexDirection: 'row',
        // backgroundColor: 'rgba(0,184,241,0.3)',
        margin: 5,
        padding: 8,
        borderRadius: 11,
    },
    cityTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cityInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    forecast: {
        flexDirection: 'row',
    },
    hourlyForecast: {
        width: 56,
        borderWidth: 1,
        borderColor: 'rgba(0,214,204,0.1)',
        alignItems: 'center',
        marginVertical: 5,
        paddingVertical: 5,
    },
    cityPreview:{
        backgroundColor:'rgba(18,180,181,0.8)',
        margin: 4,
        padding: 5,
        width: windowWidth /4,
        
    },








    list: {
        padding: 50,
        margin: 10,
        backgroundColor: 'tomato'
    }
});