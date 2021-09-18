import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import React from 'react';

import 'react-native-gesture-handler';
import CartScreen from './screens/Cart';
import Details from './screens/Details';
import MainScreen from './screens/Main';

const Stack = createSharedElementStackNavigator({
  name: 'MainStack',
  debug: true,
});

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" />
      <NavigationContainer initialRouteName="Home">
        <Stack.Navigator screenOptions={{headerTransparent: true}}>
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen
            name="Details"
            component={Details}
            sharedElements={(route, otherRoute, showing) => {
              const {item} = route.params;
              return [
                {
                  id: `item.${item.id}.photo`,
                  animation: 'fade',
                },
              ];
            }}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
