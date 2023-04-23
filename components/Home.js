import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default class HomeScreen extends React.Component{
    render(){
        const { navigation } = this.props;
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
}