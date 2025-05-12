import {React , useState, useEffect} from 'react';
import { TextInput, Dimensions } from 'react-native';
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { View, Text } from 'react-native';
import logo from '../assets/wazi.png';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { reloadAppAsync } from 'expo';
import { fetchData, getWeather } from './components/searchComp';

const Stack = createNativeStackNavigator();


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Landing({ navigation }) {

    // const navigation = useNavigation();

    


    var [myCity, setCity ] = useState("Pretoria");
    var [loading, setLoading] = useState(false);
    const [data, setData] = useState('');


    function changeCity(value){ //get input and set it to 'city' var
        setCity(myCity = value)
    }

    

    async function searchAndNavigate(city, screen) {   //fetch data and navigate to a screen. city and screen as params
        setLoading(true); // to start loading icon
        try {
      
          const data = await getWeather(city);
          setData(data);
        //   if (!data.ok) {
        //     throw new Error(`Server error: ${data.status}`);
        //   }
      
          if (!data || Object.keys(data).length === 0) {
            throw new Error('No data found in response');
          }
          navigation.navigate(screen, { fetchedData: data });
          console.log('SuCcEsS...');
          //to stop loading icon
        } catch (error) {
          console.log(error);
          Alert.alert('Error szn: ', error.message);
          // console.log( " szn: " + error.error.message);
        } finally {
          setLoading(false);
        }
        
      }




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoView}>
                <Image style={styles.logo} source={logo} />
            </View>
            <View style={styles.input}>
                <Text style={styles.titleText}>Please enter your City/Town</Text>
                <TextInput style={styles.textInputComp} placeholder='Pretoria' onChangeText={(v) => changeCity(v) }></TextInput>
                <Text>{myCity}</Text>
            </View>
            {loading? <ActivityIndicator color="#00b8f1" size={'large'}/> : 
             <TouchableOpacity style={styles.button} onPress={() => searchAndNavigate(myCity, "Search")}>
                <Text style={styles.buttonText}>Get Weather</Text>
            </TouchableOpacity>}
    

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