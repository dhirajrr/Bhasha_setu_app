import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define navigation route types
type RootStackParamList = {
  AllClasses: undefined;
  Class1: undefined;
  Class2: undefined;
  Class3: undefined;
  Class4: undefined;
  Class5: undefined;
};

type AllClassesScreenProp = StackNavigationProp<RootStackParamList, 'AllClasses'>;

const AllClasses: React.FC = () => {
  const navigation = useNavigation<AllClassesScreenProp>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>All Classes</Text>
      <View style={styles.classesContainer}>
        <TouchableOpacity
          style={styles.classCard}
          onPress={() => navigation.navigate('Class1')}
        >
          <Text style={styles.classCardText}>Class 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.classCard}
          onPress={() => navigation.navigate('Class2')}
        >
          <Text style={styles.classCardText}>Class 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.classCard}
          onPress={() => navigation.navigate('Class3')}
        >
          <Text style={styles.classCardText}>Class 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.classCard}
          onPress={() => navigation.navigate('Class4')}
        >
          <Text style={styles.classCardText}>Class 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.classCard}
          onPress={() => navigation.navigate('Class5')}
        >
          <Text style={styles.classCardText}>Class 5</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 15,
  },
  classesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  classCard: {
    width: '48%',
    backgroundColor: '#FFB74D',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  classCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default AllClasses;
