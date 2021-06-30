import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import DailyPicScreen from './screens/DailyPicScreen';
import SpaceCraftScreen from './screens/SpaceCraftScreen';
import StarMapScreen from './screens/StarMapScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator intialRouteName = 'Home' screenOptions={{headerShown:false}}>
       <Stack.Screen name='Home' component={HomeScreen}/>
       <Stack.Screen name='DailyPic' component={DailyPicScreen}/>
       <Stack.Screen name='SpaceCraft' component={SpaceCraftScreen}/>
       <Stack.Screen name='StarMap' component={StarMapScreen}/>
  </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
