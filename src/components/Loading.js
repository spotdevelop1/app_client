import React, { useState } from 'react'
import { Button, StyleSheet, View ,Text, Alert, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export function Loading ({closeModal}){
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
        </View>     
    );
}

const styles = StyleSheet.create({
    loadingContainer:{
        position:'absolute',
        bottom:50,
        left:'47%'
    }
})