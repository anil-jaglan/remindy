import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox } from 'react-native';

import ReminderList from './App/Components/ReminderList';
import ReminderForm from './App/Components/ReminderForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
]);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={ReminderList} />
        <Stack.Screen name="AddReminder" component={ReminderForm}/>
      </Stack.Navigator>      
    </NavigationContainer>
  );
}
