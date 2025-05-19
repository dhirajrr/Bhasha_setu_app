// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import TeacherLoginScreen from '../components/TeacherLoginScreen';
// import TeacherSignUpScreen from '../components/TeacherSignUpScreen';
// import AssignTest from '../components/AssignTest';

// const Stack = createStackNavigator();

// export default function TeacherStackNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="TeacherLogin">
//       <Stack.Screen name="TeacherLogin" component={TeacherLoginScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="TeacherSignUp" component={TeacherSignUpScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="AssignTest" component={AssignTest} />
//     </Stack.Navigator>
//   );
// }



import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TeacherLoginScreen from '../components/Teachers/T_Auth/TeacherLoginScreen';
import TeacherDashboard from '../components/Teachers/TeacherDashboard';
import TeacherSignUpScreen from '../components/Teachers/T_Auth/TeacherSignUpScreen';
import TeacherForgotPasswordScreen from '../components/Teachers/T_Auth/TeacherForgotPasswordScreen';
import All_Clases from '../components/Teachers/T_classes/All_Clases';
import Class1 from '../components/Teachers/T_classes/Class1';
import TeacherQuizScreen from '../components/Quize/TeacherQuizScreen';
import StudentTestScreen from '../components/Quize/StudentTestScreen';
// import TeacherCallScreen from '../components/Teachers/TeacherCallScreen';
// import StudentCallScreen from '../components/Students/StudentCallScreen'
const Stack = createStackNavigator();

const TeacherStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TeacherLoginScreen" component={TeacherLoginScreen} />
      <Stack.Screen name="TeacherSignUpScreen" component={TeacherSignUpScreen} />
      <Stack.Screen name="TeacherForgotPasswordScreen" component={TeacherForgotPasswordScreen} />
      <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />
      <Stack.Screen name="All_Clases" component={All_Clases} />
      <Stack.Screen name="Class1" component={Class1} />
      <Stack.Screen name="TeacherQuizScreen" component={TeacherQuizScreen} />
      <Stack.Screen name="StudentTestScreen" component={StudentTestScreen} />
      {/* <Stack.Screen name="TeacherCallScreen" component={TeacherCallScreen} />
      <Stack.Screen name="StudentCallScreen" component={StudentCallScreen} /> */}




    </Stack.Navigator>
  );
};

export default TeacherStackNavigator;
