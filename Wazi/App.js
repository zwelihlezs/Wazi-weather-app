import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from './src/LandingPage.js';
import MapSearch from './src/map';
import Search from './src/search';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First Page" component={Landing} />
        <Stack.Screen name ="Search" component={Search}/>
        <Stack.Screen name ="Map" component={MapSearch}/>
        

      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   view:{
    backgroundColor: 'purple',
    // height: 55,
    // width: 180,
    

  },
  text:{
    color: 'grey',
    padding: 20,
  },

  


});
