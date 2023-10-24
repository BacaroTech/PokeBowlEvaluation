import tw from 'twrnc'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';
import Form from './screens/FormScreen';
import Point from './screens/PointScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home page' }}
        />
        <Stack.Screen 
        name="Form" 
        component={Form}
        options={{ title: 'Form page' }} />
        <Stack.Screen 
        name="Punteggio" 
        component={Point}
        options={{ title: 'Point page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
