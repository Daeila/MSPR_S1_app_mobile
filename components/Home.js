import React from 'react';
import { BackHandler , StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen (){
  
    const navigation = useNavigation();

        const handleQuit = () => {
            BackHandler.exitApp();
        }


    return (
    <View style={styles.view}>
        <TouchableOpacity style={styles.titleButton} onPress={() => navigation.navigate('ItemList')}>
            <Text style={styles.textButton}>Liste des produits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleButton} onPress={handleQuit}>
            <Text style={styles.textButton}>Quitter</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    view:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    titleButton: {
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