import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    informationBackGround: {
        flex: 1,
        paddingHorizontal: 24,
        margin: 24,
        backgroundColor: '#4ABDAC',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },

    scroll: {
        marginVertical: 20,
    },

    information: {
        textAlign: 'justify',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        padding: 16,
        fontSize: 16,
        lineHeight: 24,
        color: 'black',
        borderRadius: 8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
})