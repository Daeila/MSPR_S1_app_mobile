import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen (){
  
    const navigation = useNavigation();

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go to ItemList"
            onPress={() => navigation.navigate('ItemList')}
        />
    </View>
    );
}