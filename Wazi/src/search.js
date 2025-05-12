import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import searchIcon from '../assets/search-icons.png';
import { fetchData, getWeather } from './components/searchComp';

import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import icon from '../assets/wazi-icon1.png';
import mapIcon from '../assets/gps.png';
import pc from '../assets/condition/partly-cloudy.png';
import sun from '../assets/condition/sun.png';
import rain from '../assets/condition/rain.png';
import cloud from '../assets/condition/cloud.png';
import windy from '../assets/condition/windy.png';
import storm from '../assets/condition/storm.png';
import { ScrollView } from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';



const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Search({ navigation }) {

    var measures = ["\u2103", "\u2109"]
    var fahr = measures[1];
    var celcius = measures[0];

    const route = useRoute();
    const { fetchedData } = route.params;

    var [myCity, setCity ] = useState("Pretoria");
    function changeCity(value){ //get input and set it to 'city' var
        setCity(myCity = value);
    }

    var [loading, setLoading]= useState(false);

    const [data, setData] = useState(fetchedData);

  const changedata = async () => {
    setLoading(true);
    try {
      const response = await getWeather(myCity);
      setData(response); // ✅ Updates local state
    } catch (error) {
      console.error('Failed to refetch:', error);
    }
    finally{
        console.log('NEW Data SuCcEsS....')
        setLoading(false);
    }
  };



    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    {/* Top Banner Component */}
                    <TouchableOpacity style={styles.banner}
                        onPress={() => navigation.navigate('Settings')}>
                        <Image style={styles.icon} source={icon} />

                        <Text style={{ marginRight: 5 }}>Menu</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    {/* Search Component */}
                    <View style={styles.searchComp}>
                        <View style={styles.searchInput}>
                            <TextInput placeholder={data.location.name} onChangeText={(v) => changeCity(v)}/>
                            {loading? <ActivityIndicator color="#00b8f1" size={'large'}/> :<TouchableOpacity style={{ }} onPress={() => changedata()}>
                                <Image style={styles.searchIcon} source={searchIcon} />
                            </TouchableOpacity>}
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#f9f9f9' }} onPress={() => navigation.navigate('Map')}>
                            <Image style={styles.mapIcon} source={mapIcon} />
                        </TouchableOpacity>
                    </View>

                    {/* Search result group1 */}
                    <View style={styles.cityResults}>
                        <View style={styles.cityTime}>

                            <Text style={{ color: '#363931', fontSize: 22 }}>{data.location.name}</Text>
                            {/* {console.log(data)} */}
                            <Text style={styles.timeText}>{data.location.localtime}</Text>
                        </View>
                        <View style={styles.cityInfo}>
                            <View>
                                <Image style={{ width: windowWidth / 3.9, height: 90 }} source={{ uri: `https:${data.current.condition.icon}` }} />
                            </View>
                            <View>
                                <Text style={{ color: '#ed281a', fontSize: 48, padding: 5, }}>{data.current.temp_c}{celcius}</Text>
                            </View>
                            <View style={styles.cityConditions}>
                                <Text style={{ color: '#363931', fontSize: 16 }}>{data.current.condition.text}</Text>
                                <Text style={{ color: '#363931', fontSize: 16, padding:2 }}>{data.current.wind_dir} {data.current.wind_kph}km wind</Text>
                                <Text style={{ color: '#363931', fontSize: 16 }}>{data.current.humidity}% humidity</Text>
                                
                            </View>
                        </View>

                        {/*hourlyForecast*/}
                        <View>
                            <Text style={{ color: '#363931', fontSize: 18 }}>Today</Text>
                        </View>
                        <FlatList
                        showsHorizontalScrollIndicator= {false}
                            horizontal={true}
                            data={data.forecast.forecastday[0].hour}
                            renderItem={({ item }) =>
                            (
                                <View style={styles.forecast}>
                                    <View style={styles.hourlyForecast}>
                                        <Text style={{ color: '#363931', }}>{Array.from(item.time).slice(11,16)}</Text>
                                        <Text style={{ color: '#ed281a', fontSize: 20 }}>{item.temp_c}{celcius}</Text>
                                        <Image style={{ width: 55, height: 55 }} source={{ uri: `https:${item.condition.icon}` }} />
                                        <Text style={{ color: '#363931', alignItems: 'center', }}>{item.wind_dir}{item.wind_kph}km wind</Text>
                                        <Text style={{color:'#363931', alignItems: 'center'}}>{item.humidity}% humidity</Text>
                                        <Text style={{ color: '#363931'}} >{item.chance_of_rain}% rain</Text>
                                    </View>

                                </View>)}
                            keyExtractor={item => item.time_epoch}
                        />
                    </View>

                    <View style={{ padding: 4, backgroundColor: 'rgba(0,184,241,0.3)', borderRadius: 14, margin: 4 }}>
                        <View >
                            <Text style={{ color: '#363931', fontSize: 16 }}>{data.location.name}</Text>
                        </View>

                        {/* Search results group2 */}
                        <View style={styles.cityResults1}>

                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Sun</Text>
                                <Image style={{ width: 35, height: 35 }} source={pc} />
                                <Text style={{ color: '#ed281a' }}>25`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 16km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>34% Humid</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Mon</Text>
                                <Image style={{ width: 35, height: 35 }} source={sun} />
                                <Text style={{ color: '#ed281a' }}>30`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 13km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>56% Humid</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Tue</Text>
                                <Image style={{ width: 35, height: 35 }} source={cloud} />
                                <Text style={{ color: '#ed281a' }}>20`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 24km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>75% Humid</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Wed</Text>
                                <Image style={{ width: 35, height: 35 }} source={storm} />
                                <Text style={{ color: '#ed281a' }}>19`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 21km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>88% Humid</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Thur</Text>
                                <Image style={{ width: 35, height: 35 }} source={rain} />
                                <Text style={{ color: '#ed281a' }}>23`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 26km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>65% Humid</Text>
                            </View>
                            <View style={styles.hourlyForecast}>
                                <Text style={{ color: '#363931' }}>Fri</Text>
                                <Image style={{ width: 35, height: 35 }} source={windy} />
                                <Text style={{ color: '#ed281a' }}>29`c</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>W 18km wind</Text>
                                <Text style={{ color: '#363931', alignItems: 'center', }}>58% Humid</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.citiesPreview}>
                        <View style={styles.cityPreview}>
                            <Text style={{ fontSize: windowWidth / 15, color: '#363931' }}>Durban</Text>
                            <Text style={{ fontSize: windowWidth / 17, color: '#ed281a' }}>29`c</Text>
                            <Text style={{ fontSize: windowWidth / 15 }}>Sunny</Text>
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
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center',
    },

    searchIcon:{
        height: windowWidth / 11,
        width: windowHeight / 18,
        // borderWidth:0.1,
        borderTopColor: 'green'
    },
    icon: {
        height: windowWidth / 11,
        width: windowHeight / 10
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
        height: 40,
        backgroundColor: '#e7f0f1',
        zIndex: 1000,
    }
    ,
    searchComp: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
        padding: 1,
        
    },
    searchInput: {
        // position: 'absolute',
        // alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

        borderRadius: 19,
        
        
        color: '#363931',
        backgroundColor: '#31e5d9',
        width: windowWidth - (windowWidth /5),
        padding: 10,
    },
    mapIcon: {
        height: 35,
        width: 35,
        margin: 5,

    },
    cityConditions:{
        borderWidth: 1,
        padding:9
    },
    cityResults: {
        // height: windowHeight / 2,
        backgroundColor: '#31e5d9',
        margin: 5,
        padding: 8,
        borderRadius: 11,
    },
    cityResults1: {
        height: windowHeight / 2.4,
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
        width: windowHeight/4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginRight:5
    },
    forecast: {
        flexDirection: 'row',
    },
    hourlyForecast: {
        width: windowWidth /4,
        // height: windowHeight/4,
        borderRadius:8,
        // borderWidth: 1,
        backgroundColor: '#00b8f1',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal:2,
        paddingVertical: 5,
    },
    cityPreview: {
        backgroundColor: 'rgba(18,180,181,0.8)',
        margin: 4,
        padding: 5,
        width: windowWidth / 3.5,
        height: windowWidth / 3.5,

    },








    list: {
        padding: 50,
        margin: 10,
        backgroundColor: 'tomato'
    }
});