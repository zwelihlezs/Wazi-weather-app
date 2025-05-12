import React, { useState } from 'react'
import getWeather from './searchComp'

export default async function searchAndNavigate(city, screen) {   //fetch data and navigate to a screen. city and screen as params
    const [data, setData] = useState('');
    setLoading(true); // to start loading icon
    try {
  
      const data = await getWeather(city);
      setData(data);
      if (!data.ok) {
        throw new Error(`Server error: ${data.status}`);
      }
  
      if (!data || Object.keys(data).length === 0) {
        throw new Error('No data found in response');
      }
      navigation.navigate(screen, { fetchedData: data });
      console.log(data);
      //to stop loading icon
    } catch (error) {
      console.log(error);
      Alert.alert('Error szn: ', error.message);
      // console.log( " szn: " + error.error.message);
    } finally {
      setLoading(false);
    }
    return data;
  }