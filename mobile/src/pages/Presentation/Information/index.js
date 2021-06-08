import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

export default function Information() {
    const texto = 
    `
    Este aplicativo é o resultado de um projeto desenvolvido durante o trabalho de conclusão de curso do aluno BRAYAN ALVES MARTINS FERREIRA, ORIENTADO PELA Dra. ZENAIDE CARVALHO DA SILVA.
    O objetivo desse App, é proporcionar uma abordagem diferenciada para aprendizagem dos estudantes de informática, tornando possível consultas rápidas de acordo com necessidades ou questionamentos momentâneos relacionados.
    `;
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