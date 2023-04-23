import React, { useState, useEffect } from "react"
import { Button, View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'

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
       // const [items, setItems] = useState([]);
        return(
            <View>
                <Text>Liste des articles</Text>
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => navigation.goBack()} />

                <FlatList
                    data={this.state.items}
                    renderItem={({ item }) => 
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.description}>{item.details.description}</Text>
                        <Text style={styles.color}>Color: {item.details.color}</Text>
                        <Text style={styles.price}>Price: {item.details.price}</Text>
                    </View>
                    }
                    keyExtractor={item => item.id.toString()}
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
    }
})