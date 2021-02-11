import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

export default function Information() {
    const texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis vestibulum aliquet. Ut eget massa vel augue iaculis egestas. Nulla est augue, ultrices sit amet elit sit amet, aliquam fermentum nibh. Nam nunc risus, congue nec odio id, sagittis laoreet lorem. Sed molestie et mi ut facilisis. Sed tincidunt semper augue ac interdum. Aliquam aliquet dui quis lobortis ultricies. Vivamus eget efficitur quam, at vehicula metus. Pellentesque hendrerit nibh sed blandit maximus. Ut a erat quis elit imperdiet ullamcorper. Vestibulum aliquet erat quis enim bibendum condimentum. Quisque turpis urna, ultrices nec blandit euismod, dapibus ut erat. Phasellus erat augue, dignissim.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis vestibulum aliquet. Ut eget massa vel augue iaculis egestas. Nulla est augue, ultrices sit amet elit sit amet, aliquam fermentum nibh. Nam nunc risus, congue nec odio id, sagittis laoreet lorem. Sed molestie et mi ut facilisis. Sed tincidunt semper augue ac interdum. Aliquam aliquet dui quis lobortis ultricies. Vivamus eget efficitur quam, at vehicula metus. Pellentesque hendrerit nibh sed blandit maximus. Ut a erat quis elit imperdiet ullamcorper. Vestibulum aliquet erat quis enim bibendum condimentum. Quisque turpis urna, ultrices nec blandit euismod, dapibus ut erat. Phasellus erat augue, dignissim.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis vestibulum aliquet. Ut eget massa vel augue iaculis egestas. Nulla est augue, ultrices sit amet elit sit amet, aliquam fermentum nibh. Nam nunc risus, congue nec odio id, sagittis laoreet lorem. Sed molestie et mi ut facilisis. Sed tincidunt semper augue ac interdum. Aliquam aliquet dui quis lobortis ultricies. Vivamus eget efficitur quam, at vehicula metus. Pellentesque hendrerit nibh sed blandit maximus. Ut a erat quis elit imperdiet ullamcorper. Vestibulum aliquet erat quis enim bibendum condimentum. Quisque turpis urna, ultrices nec blandit euismod, dapibus ut erat. Phasellus erat augue, dignissim.`
    return (
        <View style={styles.informationBackGround}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <Text style={styles.information}>
                    {texto}
                </Text>
            </ScrollView>
        </View>
    )
};