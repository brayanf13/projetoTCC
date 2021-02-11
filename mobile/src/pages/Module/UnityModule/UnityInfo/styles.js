import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    unityInfoBackGround: {
        flex: 1,
        // flexDirection: "column",
        margin: 24,
        paddingHorizontal: 10,
        backgroundColor: 'lightblue',
        borderRadius: 8,
    },

    image: {
        flex: 1,
        marginTop: 0,
        width: '100%',
        borderRadius: 10,
    },

    video: {
        flex: 1,
        alignSelf: 'center',
        height: 200,
        width: '100%',
        // borderRadius: 10,
      },

    scroll: {
        flex: 1,
        marginBottom: 20        
    },
    
    
    unityInfo: {
        flex: 1,
        textAlign: 'center',
        borderRadius: 8,
        backgroundColor: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24,
        color: 'black',
        padding: 16,
        marginTop: 20,
    },
})