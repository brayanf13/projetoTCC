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

    unityModuleList: {
        marginTop: 32,
    },

    unityModule: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    unityModuleButton: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    unityModuleButtonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    }
});