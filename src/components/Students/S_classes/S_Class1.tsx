import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient'; // Install expo-linear-gradient if not already installed

// Define navigation route types
type RootStackParamList = {
  MakeTest: undefined;
  Class2: undefined;
  StudentTestScreen: undefined; // Add this route
  MeetingScreen: undefined; // New route for meeting
};

type Class2ScreenProp = StackNavigationProp<RootStackParamList, 'Class2'>;

const Class2: React.FC = () => {
  const navigation = useNavigation<Class2ScreenProp>();

  return (
    <LinearGradient colors={['#2193b0', '#6dd5ed']} style={styles.container}>
      {/* Subject Buttons */}
      <View style={styles.subjectContainer}>
        <TouchableOpacity
          style={styles.subjectBlock}
          onPress={() => navigation.navigate('Math_class_1')}
        >
          <Text style={styles.blockText}>Maths</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.subjectBlock}
          onPress={() => navigation.navigate('ScienceScreen')}
        >
          <Text style={styles.blockText}>Science</Text>
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('StudentTestScreen')}
        >
          <Text style={styles.buttonText}>Give Test</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('MeetingScreen')}
        >
          <Text style={styles.buttonText}>Join Meeting</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  subjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  subjectBlock: {
    backgroundColor: '#ff9a9e',
    width: '40%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  blockText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  actionContainer: {
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#a18cd1',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Class2;
