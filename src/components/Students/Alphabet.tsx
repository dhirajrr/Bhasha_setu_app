import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech'; // Importing the expo-speech module for TTS

const BarakhadiScreen = (): React.JSX.Element => {
  const barakhadiData = [
    { symbol: 'ક', sign: '✋' },
    { symbol: 'ખ', sign: '🤚' },
    { symbol: 'ગ', sign: '✌️' },
    { symbol: 'ઘ', sign: '👌' },
    { symbol: 'ંગ', sign: '🤟' },
    { symbol: 'ચ', sign: '✊' },
    { symbol: 'છ', sign: '🤞' },
    { symbol: 'જ', sign: '🤙' },
    { symbol: 'ઝ', sign: '🖖' },
    { symbol: 'ઞ', sign: '👊' },
    { symbol: 'ટ', sign: '✋' },
    { symbol: 'ઠ', sign: '✋🤚' },
    { symbol: 'ડ', sign: '✌️🤟' },
    { symbol: 'ઢ', sign: '👌🤟' },
    { symbol: 'ણ', sign: '🖐' },
    { symbol: 'ત', sign: '🤘' },
    { symbol: 'થ', sign: '🤞✊' },
    { symbol: 'દ', sign: '🤙✋' },
    { symbol: 'ધ', sign: '🖖✊' },
    { symbol: 'ન', sign: '✊🤟' },
    { symbol: 'પ', sign: '👌✋' },
    { symbol: 'ફ', sign: '🤞✋' },
    { symbol: 'બ', sign: '✌️👌' },
    { symbol: 'ભ', sign: '🤟👌' },
    { symbol: 'મ', sign: '🖖✌️' },
    { symbol: 'ય', sign: '🖖🤘' },
    { symbol: 'ર', sign: '🤞🖖' },
    { symbol: 'લ', sign: '✋🖐' },
    { symbol: 'વ', sign: '👌🤙' },
    { symbol: 'શ', sign: '🤟🖐' },
    { symbol: 'ષ', sign: '✋✋' },
    { symbol: 'સ', sign: '🖖🤞' },
    { symbol: 'હ', sign: '🖖🖖' },
    { symbol: 'ળ', sign: '✊🖖' },
    { symbol: 'ક્ષ', sign: '🖖🤙' },
    { symbol: 'જ्ञ', sign: '✋✋🤞' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Animated Value for Animation
  const fadeIn = new Animated.Value(0);

  // Trigger Animation when screen loads
  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  // Function to play the pronunciation of the current character
  const playPronunciation = (text: string) => {
    Speech.speak(text, {
      language: 'gu', // Gujarati language code
      pitch: 1, // Adjust pitch if needed
      rate: 0.75, // Adjust speech rate if needed
    });
  };

  // Load pronunciation when the character changes
  useEffect(() => {
    const item = barakhadiData[currentIndex];
    playPronunciation(item.symbol); // Play the pronunciation of the symbol
  }, [currentIndex]);

  // Function to go to the next symbol
  const goToNextSymbol = () => {
    if (currentIndex < barakhadiData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first item
    }
  };

  // Function to go to the previous alphabet
  const goToPreviousSymbol = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(barakhadiData.length - 1); // Loop back to the last item
    }
  };

  const item = barakhadiData[currentIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gujarati Barakhadi</Text>

      <Animated.View style={{ opacity: fadeIn }}>
        <View style={styles.symbolItem}>
          <Text style={styles.symbol}>{item.symbol}</Text>
          <Text style={styles.sign}>{item.sign}</Text>
        </View>
      </Animated.View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToPreviousSymbol}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToNextSymbol}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2c3e50', // Dark background
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White title
    textAlign: 'center',
    marginBottom: 20,
  },
  symbolItem: {
    backgroundColor: '#3498db', // Light blue for each block
    paddingVertical: 40,
    marginVertical: 20,
    width: '80%',
    aspectRatio: 1, // Makes the block square
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  symbol: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  sign: {
    fontSize: 30,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    width: '45%', // Same width for both buttons
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BarakhadiScreen;
