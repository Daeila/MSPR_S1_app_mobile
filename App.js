import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/Home'
import ItemList from './components/ItemList'

import ScanScreen from './components/Scan';



const Stack = createNativeStackNavigator();

export default function App() {

  const [authorized, setAuthorized] = useState(false);

  const handleAuthorization = () => {
    setAuthorized(true);
  };

  return (
    <NavigationContainer>
      {authorized ? (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="ItemList" component={ItemList} />
      </Stack.Navigator>
      ) : (
        <ScanScreen onAuthorize={handleAuthorization} />   
      )
    }</NavigationContainer>
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
