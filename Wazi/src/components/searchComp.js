import { View, Text } from 'react-native';
import {React, useState} from 'react';
import api from '../../utils/api';

//Main fetch function
async function getWeather(city) {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fed988f3bd10481a8e8134344241811&q=${city}&days=1&aqi=no&alerts=no`);
  const data = await response.json();
  console.log(data);
  return data;
}








async function fetchData(city) {
  // const [data, setData] = useState('');   // 1️⃣ Create state for your API data
  

  try {
    const response = await getWeather(city); // 3️⃣ Fetch
    const json = await response.json(); // 4️⃣ Turn response into JSON
    // setData(json);  // 5️⃣ Store JSON into state
  } 
  catch (error) {
    console.error(error);
  } 
  finally {
    console.log('new Data SuCcEsS');
  }
  return json;
};


export { getWeather, fetchData }