import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import icon from '../assets/wazi-icon1.png';
import { ScrollView } from 'react-native';

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MapSearch({navigation}) {
    return (
        <SafeAreaView>
            <ScrollView>
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

                <View style={styles.warningCard}>
                    <View style={styles.update}>
                        <Text style={{FontSize: 35}}>Mpumalanga</Text>

                        <Text style={{FontSize: 15,color:'#363931',marginTop:5}}>Ermelo</Text>
                        <Text style={{FontSize: 13,color:'white'}}>30`c cloudly 66% Humid</Text>

                        <Text style={{marginTop: 6,color:'#363931',FontSize:15}}>Mbombela</Text>
                        <Text style={{FontSize: 13, color:'white'}}>31`c Clear 39% humid</Text>

                        <Text style={{FontSize:15,color:'#363931'}}>Secunda</Text>
                        <Text style={{FontSize:13, color:'white'}}>28`c Clear 45% humid</Text>

                        <Text style={{FontSize: 15, color: '#363931'}}>Standerton</Text>
                        <Text style={{FontSize: 13, color:'white'}}>30`c Clear 43% humid</Text>
                    </View>
                    <View style={styles.alerts}>
                        <Text style={{color:'#ed281a', FontSize:35}}>Alerts</Text>

                        <Text style={{color:'#fdfb52',marginTop:4}}>Heavy rain:</Text>
                        <Text>Skukuza, Carolina</Text>

                        <Text style={{color: '#fdfb52', FontSize:15}}>Snow:</Text>
                        <Text style={{}}>Mbuzini, Middleburg</Text>
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
    },
    icon: {
        height: 35,
        width: 68
    },
    mapComp: {
        padding: 3,
        marginTop:50,
        marginHorizontal:4,
        marginVertical: 10,
        borderWidth:2,
        borderColor: 'rgba(49,229,217,0.7)',
        borderRadius: 10,
    },
    map:{
        width:'99%',
        height: windowHeight/1.9,
        // padding: 3,
        borderRadius: 10,
        alignSelf:'center'
    },
    getButton:{
        backgroundColor: 'rgba(0,241,218,0.5)',
        width:97,
        borderRadius:12,
        alignSelf: 'center',
        margin:6,
    },
    warningCard:{
        flexDirection:'row',
        backgroundColor: '#13b4bf',
        borderRadius: 12,
        padding: 7,
        marginHorizontal: 4,
        marginVertical:24
    },
    update:{
        width: windowWidth/1.8,
    },
    alerts:{
        backgroundColor: 'rgba'
    }

});
