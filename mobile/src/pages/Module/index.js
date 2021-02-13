import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import styles from './styles';

export default function Module() {
    const [modules, setModules] = useState([]);
    const navigation = useNavigation();
    const [searchValue, setSearchValue] = useState('');


    function navigateToInUnity(modulee) {
        navigation.navigate('Unidades', { modulee });
    }

    async function loadModules() {
        const response = await api.get('module');

        setModules(response.data);
    };

    useEffect(() => {
        loadModules();
    }, []);

    async function search() {
        const response = await api.get('module', {
            params: {
                search: searchValue
            }
        });
        setModules(response.data);
    };

    useEffect(() => {
        search();
    }, [searchValue]);

    return (
        <View style={styles.container} >
            <View style={styles.viewInput}>
                <TextInput style={styles.moduleInput} type="text" onChangeText={text => setSearchValue(text)}></TextInput>
                <Feather style={styles.searchIcon} name="search" size={20} color="black" />
            </View>

            <FlatList
                data={modules}
                style={styles.moduleList}
                keyExtractor={moduless => String(moduless.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: moduless }) => (
                    <View style={styles.module}>
                        <TouchableOpacity
                            style={styles.moduleButton}
                            onPress={() => navigateToInUnity(moduless)}
                        >
                            <Text style={styles.moduleButtonText}>{moduless.name}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}