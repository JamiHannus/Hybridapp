import React from 'react';
import {LoginScreen} from './Screens/LoginScreen';
import {Items} from './Screens/Items';
import {ShowItem} from './Screens/ShowItem';
import {NewItem} from './Screens/NewItem';
import {ImageTest} from './Screens/ImageTest';
import {Register} from './Screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();

export default function() {
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login Screen">
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Items" component={Items} />
      <Stack.Screen name="Item" component={ShowItem} />
      <Stack.Screen name="NewItem" component={NewItem} />
      <Stack.Screen name="ImageTest" component={ImageTest} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

