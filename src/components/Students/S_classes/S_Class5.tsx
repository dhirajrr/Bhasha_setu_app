// import React from 'react';
// import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

// // Define navigation route types
// type RootStackParamList = {
//   S_Class2: undefined; // Screen for the "Join Meeting"
//   StudentTestScreen: undefined; // Screen for the "Give Test"
// };

// type TestAndMeetingScreenProp = StackNavigationProp<RootStackParamList, 'S_Class2'>;

// const TestAndMeetingScreen: React.FC = () => {
//   const navigation = useNavigation<TestAndMeetingScreenProp>();

//   const handleGiveTest = () => {
//     // Navigate to StudentTestScreen on button press
//     navigation.navigate('StudentTestScreen');
//   };

//   const handleJoinMeeting = () => {
//     // Navigate to S_Class2 screen on button press
//     navigation.navigate('StudentCallScreen');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Choose an Option</Text>

//       {/* Give Test Button */}
//       <TouchableOpacity
//         style={[styles.classCard, { backgroundColor: '#4FC3F7' }]}
//         onPress={handleGiveTest}
//       >
//         <Text style={styles.buttonText}>Give Test</Text>
//       </TouchableOpacity>

//       {/* Join Meeting Button */}
//       <TouchableOpacity
//         style={[styles.classCard, { backgroundColor: '#FFB74D' }]}
//         onPress={handleJoinMeeting}
//       >
//         <Text style={styles.buttonText}>Join Meeting</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   classCard: {
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//     marginBottom: 20,
//     width: '80%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
// });

// export default TestAndMeetingScreen;



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define navigation route types
type RootStackParamList = {
  MakeTest: undefined;
  Class2: undefined;
  StudentTestScreen: undefined; // Add this route
  QuizScreen: undefined; // New route for quiz
  MeetingScreen: undefined; // New route for meeting
};

type Class2ScreenProp = StackNavigationProp<RootStackParamList, 'Class5'>;

const Class2: React.FC = () => {
  const navigation = useNavigation<Class2ScreenProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class 5</Text>
      
      {/* Buttons for different subjects */}
      <TouchableOpacity
        style={styles.subjectButton}
        onPress={() => navigation.navigate('Math_class_5')} // Add MathsScreen route to RootStackParamList
      >
        <Text style={styles.buttonText}>Maths</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.subjectButton}
        onPress={() => navigation.navigate('ShapesScreen')} // Add ShapesScreen route to RootStackParamList
      >
        <Text style={styles.buttonText}>Shapes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.subjectButton}
        onPress={() => navigation.navigate('TablesScreen')} // Add TablesScreen route to RootStackParamList
      >
        <Text style={styles.buttonText}>Tables</Text>
      </TouchableOpacity>

      {/* Existing buttons */}
      <TouchableOpacity
        style={styles.makeTestButton}
        onPress={() => navigation.navigate('StudentTestScreen')} // Ensure this matches RootStackParamList
      >
        <Text style={styles.buttonText}>Give Test</Text>
      </TouchableOpacity>

      {/* New buttons */}
      <TouchableOpacity
        style={styles.makeTestButton}
        onPress={() => navigation.navigate('QuizScreen')} // New quiz screen
      >
        <Text style={styles.buttonText}>Give Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.makeTestButton}
        onPress={() => navigation.navigate('MeetingScreen')} // New meeting screen
      >
        <Text style={styles.buttonText}>Join Meeting</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 20,
  },
  subjectButton: {
    backgroundColor: '#81C784',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  makeTestButton: {
    backgroundColor: '#FFB74D',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Class2;
