import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';


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
                <Feather style={{marginRight: 10}} name="info" size={30} color="black" />
                <Text style={styles.text}>Informações</Text>
            </TouchableOpacity>
        </View>
    )
}

