import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        const { navigation } = this.props;
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Item</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
        </View>
        );
  }
}