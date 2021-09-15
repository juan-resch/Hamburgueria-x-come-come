import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Cardapio from './Cardapio';

const Drawer = createDrawerNavigator();

export const Routes = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Cardápio" options={{headerShown: false}} component={ Cardapio } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
