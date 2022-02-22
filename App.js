import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './screens/Main';
import Detail from './screens/Detail';


const Stack = createNativeStackNavigator();


export default function App(){
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>    
    </Provider>
  )
}