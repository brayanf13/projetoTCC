import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import styles from './styles';
import testeImage from '../../../../assets/Tática.png';
import movie from '../../../../assets/video.mp4';

export default function UnityInfo() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [videoImage, setVideoImage] = React.useState(true);
    const texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis vestibulum aliquet. Ut eget massa vel augue iaculis egestas. Nulla est augue, ultrices sit amet elit sit amet, aliquam fermentum nibh. Nam nunc risus, congue nec odio id, sagittis laoreet lorem. Sed molestie et mi ut facilisis. Sed tincidunt semper augue ac interdum. Aliquam aliquet dui quis lobortis ultricies. Vivamus eget efficitur quam, at vehicula metus. Pellentesque hendrerit nibh sed blandit maximus. Ut a erat quis elit imperdiet ullamcorper. Vestibulum aliquet erat quis enim bibendum condimentum. Quisque turpis urna, ultrices nec blandit euismod, dapibus ut erat. Phasellus erat augue, dignissim.`
    return (
        <View style={styles.unityInfoBackGround}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                {videoImage ? 
                <Image resizeMode="contain" source={testeImage} style={styles.image} />
                :
                <Video
                ref={video}
                style={styles.video}
                source={movie}
                isMuted={false}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                }
                <Text style={styles.unityInfo}>
                    {texto}
                </Text>
            </ScrollView>
            </View>
            )
};