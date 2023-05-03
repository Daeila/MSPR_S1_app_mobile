import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ThreeScene from './Modelisation_3D'

export default class Item extends React.Component{
    render(){
        const { navigation, route } = this.props;
        const { product }  = route.params;
        return (
            <View style={styles.view}>

            <TouchableOpacity style={styles.titleButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textButton}>Accueil</Text>
            </TouchableOpacity>

            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.descriptionTitle}>Description :</Text>
            <Text style={styles.description}>{product.details.description}</Text>
            <Text style={styles.descriptionTitle}>Color :</Text>
            <Text style={styles.color}>{product.details.color}</Text>
            <Text style={styles.descriptionTitle}>Price :</Text>
            <Text style={styles.price}>{product.details.price}</Text>

            <ThreeScene/>


        </View>
        );
  }
}

const styles = StyleSheet.create({
    view:{
        flex: 1, 
        alignItems: 'flex-start', 
        justifyContent: 'center' 
    },
    item:{
        margin:20
    },
    title: {
        alignItems: 'center',
        fontSize:22,
        fontWeight: 'bold',
        marginTop:40,
        marginBottom:20
    },
    descriptionTitle:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:10,
        textAlign: 'left'
    },
    description:{
        fontSize:16,
        margin:10
    },
    color:{
        fontSize:16,
        margin:10,
        textAlign: 'left'
    },
    price:{
        fontSize:16,
        margin:10,
        textAlign: 'left'
    },
    titleButton: {
        position: 'absolute',
        top:0,
        left:0,
        fontSize:22,
        marginBottom:20,
        backgroundColor: '#007AFF',
        borderRadius: 10,
        padding: 10,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    textButton: {
        color: 'white'
    }
})