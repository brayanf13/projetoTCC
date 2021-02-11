import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    informationBackGround: {
        flex: 1,
        margin: 24,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },

    scroll: {
        marginVertical: 20,
    },

    information: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        padding: 16,
        fontSize: 16,
        lineHeight: 24,
        color: 'black',
    },
})