import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ThreeScene from './Modelisation_3D'

export default class Item extends React.Component{
    render(){
        const { navigation, route } = this.props;
        const { product }  = route.params;
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Item</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>

            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{product.details.description}</Text>
            <Text style={styles.color}>Color: {product.details.color}</Text>
            <Text style={styles.price}>Price: {product.details.price}</Text>
            <ThreeScene/>

        </View>
        );
  }
}

const styles = StyleSheet.create({
    item:{
        margin:20
    },
    title: {
        fontSize:22,
        marginBottom:20
    },
    titleButton: {
        fontSize:22,
        marginBottom:20,
        backgroundColor: '#007AFF',
        borderRadius: 10,
        padding: 10,
        color: '#FFFFFF',
        textAlign: 'center'
    }
})