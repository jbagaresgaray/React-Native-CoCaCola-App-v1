import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import 'react-native-gesture-handler';
import CartScreen from './screens/Cart';
import Details from './screens/Details';
import MainScreen from './screens/Main';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator screenOptions={{headerTransparent: true}}>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
