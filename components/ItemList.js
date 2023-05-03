import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

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
            <View style={styles.view}>
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
    view:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    item:{
        margin:10
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