import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Presentation from './pages/Presentation';
import Information from './pages/Presentation/Information';
import Module from './pages/Module';
import UnityModule from './pages/Module/UnityModule';
import UnityInfo from './pages/Module/UnityModule/UnityInfo';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Menu Inicial" component={Presentation} />
                <AppStack.Screen name="Informação" component={Information} />
                <AppStack.Screen name="Módulos" component={Module} />
                <AppStack.Screen name="Unidades" component={UnityModule} />
                <AppStack.Screen name="Informação da Unidade" component={UnityInfo} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}