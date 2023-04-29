import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ThreeScene from './Modelisation_3D'

import HelloWorldSceneAR from './AugmentedReality'

import * as THREE from 'three';
import { GLView } from 'expo-gl';
import * as ExpoTHREE from 'expo-three';
import { Canvas } from '@react-three/fiber';

export default class Item extends React.Component{
    render(){
        //const { navigation, route } = this.props;
        //const { product }  = route.params;
        return (
            <View>hi</View>
           // <ThreeScene/>
           // <HelloWorldSceneAR/>
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