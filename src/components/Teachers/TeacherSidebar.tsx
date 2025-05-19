import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For clearing stored tokens
import { useNavigation } from '@react-navigation/native'; // For navigation
import { StackNavigationProp } from '@react-navigation/stack'; // For typed navigation

// Define navigation route types
type RootStackParamList = {
  TeacherLoginScreen: undefined;
  TeacherDashboard: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'TeacherDashboard'>;

interface SidebarProps {
  toggleSidebar: () => void;
}

const TeacherSidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  const navigation = useNavigation<NavigationProp>();

  const handleLogout = async () => {
    try {
      // Clear user session or token
      await AsyncStorage.removeItem('userToken'); // Replace 'userToken' with your actual key
      Alert.alert('Logged Out', 'You have been logged out successfully.');

      // Redirect to the Login screen
      navigation.navigate('TeacherLoginScreen');
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  return (
    <View style={styles.sidebar}>
      <TouchableOpacity style={styles.closeButton} onPress={toggleSidebar}>
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>
      <Text style={styles.sidebarTitle}>Menu</Text>
      <TouchableOpacity style={styles.sidebarItem}>
        <Text style={styles.sidebarText}>Manage Classes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarItem}>
        <Text style={styles.sidebarText}>Take Meetings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarItem}>
        <Text style={styles.sidebarText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarItem} onPress={handleLogout}>
        <Text style={styles.sidebarText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '70%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 1,
    borderLeftColor: '#E0E0E0',
    padding: 20,
    zIndex: 10,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  closeButtonText: {
    fontSize: 30,
    color: '#1976D2',
  },
  sidebarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1976D2',
  },
  sidebarItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sidebarText: {
    fontSize: 16,
    color: '#455A64',
  },
});

export default TeacherSidebar;
