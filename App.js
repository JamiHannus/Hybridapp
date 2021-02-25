import React from 'react';
import {LoginScreen} from './Screens/LoginScreen';
import {Items} from './Screens/Items';
import {ShowItem} from './Screens/ShowItem';
import {NewItem} from './Screens/NewItem';
import {ImageTest} from './Screens/ImageTest';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function() {
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Items" component={Items} />
      <Stack.Screen name="Item" component={ShowItem} />
      <Stack.Screen name="NewItem" component={NewItem} />
      <Stack.Screen name="ImageTest" component={ImageTest} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

