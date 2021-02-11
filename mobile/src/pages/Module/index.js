import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

// import api from '../../services/api';

import styles from './styles';

export default function Module() {
    const navigation = useNavigation();

    function navigateToInUnity() {
        navigation.navigate('Unidades');
    }
    
    return (
        <View style={styles.container} >

            <FlatList
                data={[1,2,3,4]}
                style={styles.moduleList}
                keyExtractor={module => String(module)}
                // showsVerticalScrollIndicator={true}
                renderItem={() => (
                    <View style={styles.module}>
                        <TouchableOpacity
                            style={styles.moduleButton}
                            onPress={navigateToInUnity}
                        >
                            <Text style={styles.moduleButtonText}>Botão teste</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}