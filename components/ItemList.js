import React, { useState, useEffect } from "react"
import { Button, View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'

export default class ItemList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch('https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products')
            .then(response => response.json())
            .then(data => this.setState({ items: data }))
            .catch(error => console.error(error));
    }

    render(){
        const { navigation } = this.props;
       
        const handleItemPress = (product) => {
            navigation.navigate('Item', { product });
          }
          
          const renderItem = ({ item }) => {
            return (
              <View style={styles.item}>
                <TouchableOpacity style={styles.titleButton} onPress={() => handleItemPress(item)}>
                    <Text style={styles.title}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          }

        return(
            <View>
                <Text>Liste des articles</Text>
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => navigation.goBack()} />

                <FlatList
                    data={this.state.items}
                    renderItem={ renderItem }
                    keyExtractor={product => product.id.toString()}
                />
            </View>
        )
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