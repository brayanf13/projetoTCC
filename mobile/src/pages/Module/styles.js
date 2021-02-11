import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        margin: 24,
        borderRadius: 8,
        backgroundColor: 'lightblue',
    },

    moduleList: {
        marginTop: 32,
    },

    module: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    moduleButton: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    moduleButtonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    }
});