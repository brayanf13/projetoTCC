import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Information from './Information';

export default function Presentation() {
    const navigation = useNavigation();

    function navigateToInformation() {
        navigation.navigate('Informação');
    }
    function navigateToInModule() {
        navigation.navigate('Módulos');
    }
    return (
        <View style={styles.menuBackGround}>
            <TouchableOpacity
                style={styles.menu}
                onPress={navigateToInModule}
            >
                <Text style={styles.text}>Módulos</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.menu}
                onPress={navigateToInformation}
            >
                <Text style={styles.text}>Informações</Text>
            </TouchableOpacity>
        </View>
    )
}

