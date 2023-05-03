import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/Home'
import ItemList from './components/ItemList'
import Item from './components/Item'
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
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }}/>
        <Stack.Screen name="ItemList" component={ItemList} options={{ title: 'Liste des produits' }}/>
        <Stack.Screen name="Item" component={Item} options={{ title: 'Fiche produit' }}/>
      </Stack.Navigator>
      ) : (
        <ScanScreen onAuthorize={handleAuthorization} />   
      )
    }</NavigationContainer>
  );
}
