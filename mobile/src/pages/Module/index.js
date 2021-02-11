import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Module() {
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    function navigateToInUnity() {
        navigation.navigate('Unidades');
    }

    async function loadModules() {
        if (loading) {
            return;
        }

        if (total > 0 && modules.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('module');

        setModules(response.data);
        setLoading(false);
    }

    useEffect(() => {
        loadModules();
    }, [])
    
    return (
        <View style={styles.container} >

            <FlatList
                data={modules}
                style={styles.incidentList}
                keyExtractor={modu => String(modu.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: modu }) => (
                    <View style={styles.module}>
                        <TouchableOpacity
                            style={styles.moduleButton}
                            onPress={navigateToInUnity}
                        >
                            <Text style={styles.moduleButtonText}>{modu.name}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}