import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MathematicsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mathematics Lectures</Text>

      {/* Module Sections */}
      <View style={styles.modulesContainer}>
        <TouchableOpacity
          style={styles.moduleItem}
          onPress={() => navigation.navigate('Algebra')}
        >
          <Text style={styles.moduleText}>Module 1: Numbers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.moduleItem}
          onPress={() => navigation.navigate('Geometry')}
        >
          <Text style={styles.moduleText}>Module 2: Operators in Mathematics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.moduleItem}
          onPress={() => navigation.navigate('Shapes_class_1')}
        >
          <Text style={styles.moduleText}>Module 3: Shapes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.moduleItem}
          onPress={() => navigation.navigate('Tables_class_1')}
        >
          <Text style={styles.moduleText}>Module 4: Tables</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.moduleItem}
          onPress={() => navigation.navigate('Graph_class_1')}
        >
          <Text style={styles.moduleText}>Module 5: Graphs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.moduleItem}
          onPress={() => navigation.navigate('deciandfrac')}
        >
          <Text style={styles.moduleText}>Module 6: Decimals and Fractions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e8f4fc',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#34495e',
    textAlign: 'center',
  },
  modulesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  moduleItem: {
    backgroundColor: '#56c1ff',
    width: '45%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  moduleText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default MathematicsScreen;
