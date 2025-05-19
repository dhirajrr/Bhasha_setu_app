import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ShapesScreen = () => {
  const [selectedShape, setSelectedShape] = useState<string | null>(null);

  // Placeholder for images that you will upload later
  const shapesImages = {
    circle: require('../../../assets/images/shape-circle.png'), // Replace with your image
    square: require('../../../assets/images/Square.jpg'), // Replace with your image
    triangle: require('../../../assets/images/Triangle.jpg'), // Replace with your image
    rectangle: require('../../../assets/images/rectangle.jpg'), // Replace with your image
    hexagon: require('../../../assets/images/Hexagon.png'), 
    pentagon: require('../../../assets/images/pentagon.jpg'), // Replace with your image
    semicircle: require('../../../assets/images/semicirle.jpg'), 
    parallelogram: require('../../../assets/images/parallelogram.jpg'),// Replace with your image

  };

  const renderShapeImage = () => {
    if (!selectedShape) return null;

    return (
      <View style={styles.shapeContainer}>
        <Text style={styles.shapeText}>{selectedShape}</Text>
        <Image source={shapesImages[selectedShape as keyof typeof shapesImages]} style={styles.shapeImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interactive Shapes</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedShape('circle')}>
          <Text style={styles.buttonText}>Circle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedShape('square')}>
          <Text style={styles.buttonText}>Square</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedShape('triangle')}>
          <Text style={styles.buttonText}>Triangle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedShape('rectangle')}>
          <Text style={styles.buttonText}>Rectangle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedShape('hexagon')}>
          <Text style={styles.buttonText}>Hexagon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedShape('pentagon')}>
          <Text style={styles.buttonText}>pentagon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedShape('semicircle')}>
          <Text style={styles.buttonText}>semicircle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedShape('parallelogram')}>
          <Text style={styles.buttonText}>parallelogram</Text>
        </TouchableOpacity>
      </View>

      {renderShapeImage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#2c3e50',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    margin: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  shapeContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  shapeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shapeImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default ShapesScreen;