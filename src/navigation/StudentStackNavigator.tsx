// StudentStackNavigator.tsx
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../utils/FirebaseConfig';
import StudentLoginScreen from '../components/Students/S_Auth/StudentLoginScreen';
import StudentDashboard from '../components/Students/StudentDashboard';
import StudentSignUpScreen from '../components/Students/S_Auth/StudentSignUpScreen';
import StudentForgotPasswordScreen from '../components/Students/S_Auth/StudentForgotPasswordScreen';
import Alphabet from '../components/Students/Alphabet';
import WhiteBoardScreens from '../components/Students/WhiteBoardScreens';
import S_Class1 from '../components/Students/S_classes/S_Class1';
import StudentTestScreen from '../components/Quize/StudentTestScreen';
import QuizResultScreen from '../components/Quize/QuizResultScreen';
import Text_to_Video from '../components/Students/Text_to_Video';
import English_Alphabets from '../components/Students/English_Alphabets';
import StudentSideBar from '../components/Students/StudentSideBar';
// import StudentCallScreen from '../components/Students/StudentCallScreen';
import S_Class5 from '../components/Students/S_classes/S_Class5';
import AIHelper from '../components/Students/AIHelper';
import TextToImageAI from '../components/Students/TextToImageAI';
import ProgressTracking from '../components/Quize/ProgressTracking';
import EmailInputScreen from '../components/Quize/EmailInputScreen';
import Math_class_1 from '../components/Students/S_classes/Math_class_1';
import Shapes_class_1 from '../components/Students/S_classes/Shapes_class_1';
import Tables_class_1 from '../components/Students/S_classes/Tables_class_1';
// import Graph_class_1 from '../components/Students/S_classes/Graph_class_1';
import Math_class_5 from '../components/Students/S_classes/Math_class_5';
import Class_5_Algebra from '../components/Students/S_classes/Class_5_Algebra';
import Class_5_Gemoetry from '../components/Students/S_classes/Class_5_Gemoetry';
import Student_Profile from '../components/Students/Student_Profile';

const Stack = createStackNavigator();
const auth = getAuth(app);

const StudentStackNavigator = () => {
  const [user, setUser] = useState<any>(null);

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user state based on authentication
    });

    return () => unsubscribe(); // Clean up the subscription when the component unmounts
  }, []);

  return (
    <Stack.Navigator initialRouteName={user ? "StudentDashboard" : "StudentLoginScreen"}>
      <Stack.Screen
        name="StudentLoginScreen"
        component={StudentLoginScreen}
        options={{ headerShown: false }} // Hide header for the login screen
      />
      <Stack.Screen
        name="StudentSignUpScreen"
        component={StudentSignUpScreen}
        options={{ headerShown: false }} // Hide header for the sign-up screen
      />
      <Stack.Screen
        name="ForgetPassword"
        component={StudentForgotPasswordScreen}
        options={{ headerShown: false }} // Hide header for the forget password screen
      />

      <Stack.Screen
        name="StudentDashboard"
        component={StudentDashboard}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="S_Class1"
        component={S_Class1}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="S_Class5"
        component={S_Class5}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="StudentTestScreen"
        component={StudentTestScreen}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

     <Stack.Screen
        name="QuizResultScreen"
        component={QuizResultScreen}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />
     
     <Stack.Screen
        name="Alphabet"
        component={Alphabet}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="English_Alphabets"
        component={English_Alphabets}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="Text_to_Video"
        component={Text_to_Video}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />
     
     <Stack.Screen
        name="WhiteBoardScreens"
        component={WhiteBoardScreens}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="StudentSideBar"
        component={StudentSideBar}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="AIHelper"
        component={AIHelper}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="TextToImageAI"
        component={TextToImageAI}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="ProgressTracking"
        component={ProgressTracking}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      

      <Stack.Screen
        name="EmailInputScreen"
        component={EmailInputScreen}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

    <Stack.Screen
        name="Math_class_1"
        component={Math_class_1}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />


      <Stack.Screen
        name="Shapes_class_1"
        component={Shapes_class_1}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="Tables_class_1"
        component={Tables_class_1}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      {/* <Stack.Screen
        name="Graph_class_1"
        component={Graph_class_1}
        options={{ headerShown: true }} // Show header for the dashboard screen
      /> */}

      <Stack.Screen
        name="Math_class_5"
        component={Math_class_5}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

     <Stack.Screen
        name="Class_5_Algebra"
        component={Class_5_Algebra}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="Class_5_Gemoetry"
        component={Class_5_Gemoetry}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

      <Stack.Screen
        name="Student_Profile"
        component={Student_Profile}
        options={{ headerShown: true }} // Show header for the dashboard screen
      />

    </Stack.Navigator>

    
  );
};

export default StudentStackNavigator;
