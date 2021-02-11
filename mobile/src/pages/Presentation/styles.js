
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    menuBackGround: {
        flex: 1,
        // width: '100%',
        margin: 32,
        padding: 32,
        // maxHeight: 100,
        backgroundColor: 'lightblue',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    
    menu: {
        flex: 1,
        maxHeight: 100,
        minWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
})