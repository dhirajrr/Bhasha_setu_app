// TeacherDashboard.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import TeacherSidebar from '../Teachers/TeacherSidebar';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define navigation route types
type RootStackParamList = {
  TeacherDashboard: undefined;
  All_Clases: undefined;
};

type TeacherDashboardScreenProp = StackNavigationProp<RootStackParamList, 'TeacherDashboard'>;

const TeacherDashboard: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const navigation = useNavigation<TeacherDashboardScreenProp>();

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Teacher Dashboard</Text>
          <TouchableOpacity onPress={toggleSidebar}>
            <Image
              source={{ uri: 'https://via.placeholder.com/40' }} // Replace with a valid image URI
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/heroimage.jpg')} // Ensure this path is correct
            style={styles.bannerImage}
          />
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Teaching Made Easy</Text>
            <Text style={styles.bannerSubtitle}>Manage your classes and meetings effortlessly</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Start Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Dashboard Options */}
        <View style={styles.dashboardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>All Classes</Text>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => navigation.navigate('All_Clases')}
            >
              <Text style={styles.cardButtonText}>View Classes</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Take Meetings</Text>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => navigation.navigate('TeacherCallScreen')}
            >
              <Text style={styles.cardButtonText}>Start a New Meeting</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Sidebar */}
      {isSidebarVisible && <TeacherSidebar toggleSidebar={toggleSidebar} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bannerContainer: {
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  bannerTextContainer: {
    padding: 15,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#455A64',
    marginBottom: 10,
    textAlign: 'center',
  },
  bannerButton: {
    backgroundColor: '#1976D2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  bannerButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  dashboardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: '#FFB74D',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  cardButton: {
    backgroundColor: '#1976D2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cardButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default TeacherDashboard;
