import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSelectionScreen from '../components/LoginSelectionScreen';
import StudentStackNavigator from '../navigation/StudentStackNavigator';
import TeacherStackNavigator from '../navigation/TeacherStackNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginSelection">
      <Stack.Screen name="LoginSelection" component={LoginSelectionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Student" component={StudentStackNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Teacher" component={TeacherStackNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
