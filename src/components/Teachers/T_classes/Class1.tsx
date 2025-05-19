import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define navigation route types
type RootStackParamList = {
  MakeTest: undefined;
  Class1: undefined;
  TeacherQuizScreen: undefined; // Add this line
};

type Class1ScreenProp = StackNavigationProp<RootStackParamList, 'Class1'>;

const Class1: React.FC = () => {
  const navigation = useNavigation<Class1ScreenProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class 1</Text>
      <TouchableOpacity
        style={styles.makeTestButton}
        onPress={() => navigation.navigate('TeacherQuizScreen')} // This route now exists
      >
        <Text style={styles.buttonText}>Make Test</Text>
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
  makeTestButton: {
    backgroundColor: '#FFB74D',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Class1;
