import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

// import api from '../../services/api';

import styles from './styles';

export default function UnityModule() {
    const navigation = useNavigation();

    function navigateToInUnityInfo() {
        navigation.navigate('Informação da Unidade');
    }
    
    return (
        <View style={styles.container} >

            <FlatList
                data={[1,2,3,4]}
                style={styles.unityModuleList}
                keyExtractor={unity => String(unity)}
                // showsVerticalScrollIndicator={true}
                renderItem={() => (
                    <View style={styles.unityModule}>
                        <TouchableOpacity
                            style={styles.unityModuleButton}
                            onPress={navigateToInUnityInfo}
                        >
                            <Text style={styles.unityModuleButtonText}>Unidade</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}